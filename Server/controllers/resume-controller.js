// const puppeteer = require('puppeteer');
import puppeteer from 'puppeteer';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules (add this near the top of your file)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import htmlPdf from 'html-pdf-node'; // Import html-pdf

// Define __dirname for ES modules (add this near the top of your file)


export const generateResumePdf = async (req, res) => {
  const { htmlContent } = req.body;

  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    // await page.setViewport({ width: 800, height: 1600 }); // Or adjust based on your design

    // Set content and wait for it to load
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });



    await page.addStyleTag({
      content: `
          @page {
            size: auto;
            margin: 0;
          }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: 100% !important;
            overflow: hidden !important;
          }
          #resume {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
          #resume > div.p-8 {
            padding: 40px !important; /* You can adjust this */
          }
          .container, .max-w-screen-md, .mx-auto {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
          }
          .rounded-lg, .shadow-lg {
            border-radius: 0 !important;
            box-shadow: none !important;
          }
        `
    });


    // Get the dimensions of the content
    const dimensions = await page.evaluate(() => {
      // We need to calculate the full height of the document
      const body = document.body;
      const html = document.documentElement;

      const width = Math.max(
        body.scrollWidth, body.offsetWidth,
        html.clientWidth, html.scrollWidth, html.offsetWidth
      );

      const height = Math.max(
        body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight
      );

      return { width, height };
    });

    //     // Add a small buffer to ensure content fits
    const width = dimensions.width + 40; // 20px buffer on each side
    const height = dimensions.height + 40; // 20px buffer on each side
    // Generate PDF with fixed dimensions

    const pdfBuffer = await page.pdf({
      width: `${width}px`,
      height: `${height}px`,
      printBackground: true,
      pageRanges: '1', // Single page
      scale: 1,
      preferCSSPageSize: true, // This allows CSS @page size to be used
      margin: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
      },
    });

    console.log('PDF Buffer Size:', pdfBuffer.length);
console.log('PDF Header:', pdfBuffer.toString('utf8', 0, 20)); // Should start with "%PDF-"

// Add validation before sending response
if (!pdfBuffer.toString('utf8', 0, 5).includes('%PDF-')) {
  console.error('Generated file does not appear to be a valid PDF');
  // Using the imported fs module instead of require
  fs.writeFileSync(path.join(__dirname, 'debug-output.bin'), pdfBuffer);
  res.status(500).send('Invalid PDF generated');
  return;
}
     



    await browser.close();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="resume.pdf"',
    });

    res.send(pdfBuffer);
    console.log(pdfBuffer)
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).send('Error generating PDF');
  }
//   try {
//     const { htmlContent } = req.body;
    
//     if (!htmlContent) {
//       return res.status(400).json({ error: 'HTML content is required' });
//     }

//     const options = { 
//       format: 'A4',
//       printBackground: true,
//       // margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' }
//     };
    
//     const file = { content: htmlContent };
    
//     htmlPdf.generatePdf(file, options).then(pdfBuffer => {
//       res.setHeader('Content-Type', 'application/pdf');
//       res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
//       res.send(pdfBuffer);
//     });
//   } catch (error) {
//     console.error('PDF generation error:', error);
//     res.status(500).json({ error: 'Failed to generate PDF' });
//   }
}


// import puppeteer from 'puppeteer';
// import * as fs from 'fs';
// import * as path from 'path';
// import { fileURLToPath } from 'url';

// // Define __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export const generateResumePdf = async (req, res) => {
//   const { htmlContent } = req.body;

//   try {
//     // Test with simple HTML first to check if Puppeteer works
//     const testHtml = '<html><body><h1>PDF Test</h1><p>This is a test document.</p></body></html>';
//     let testPdfWorks = true;

//     const browser = await puppeteer.launch({
//       headless: "new",
//       args: [
//         '--no-sandbox',
//         '--disable-setuid-sandbox',
//         '--disable-dev-shm-usage',
//         '--disable-gpu',
//         '--font-render-hinting=none'
//       ],
//       timeout: 30000
//     });

//     try {
//       // First test with a simple PDF
//       const testPage = await browser.newPage();
//       await testPage.setContent(testHtml, { waitUntil: 'networkidle0' });
//       const testPdf = await testPage.pdf({ format: 'A4' });
      
//       if (!testPdf.toString('utf8', 0, 5).includes('%PDF-')) {
//         testPdfWorks = false;
//         console.error('Basic PDF generation test failed - environment issue detected');
//         fs.writeFileSync(path.join(__dirname, 'test-output.bin'), testPdf);
//       }
//       await testPage.close();
//     } catch (testError) {
//       testPdfWorks = false;
//       // console.error('Test PDF generation failed:', testError);
//       console.log(testError)
//     }

//     // If even basic PDF doesn't work, report the error
//     if (!testPdfWorks) {
//       await browser.close();
//       res.status(500).send('Server environment cannot generate PDFs correctly');
//       return;
//     }

//     // If test passed, proceed with actual resume PDF
//     const page = await browser.newPage();
    
//     // Debug HTML content
//     fs.writeFileSync(path.join(__dirname, 'debug-html.html'), htmlContent);
//     console.log('HTML saved for debugging');

//     // Wait for content to fully load with multiple conditions
//     await page.setContent(htmlContent, { 
//       waitUntil: ['networkidle0', 'load', 'domcontentloaded']
//     });
    
//     // Additional wait to ensure everything is rendered
//     await page.waitForTimeout(1000);

//     // Add styling
//     await page.addStyleTag({
//       content: `
//         @page {
//           size: auto;
//           margin: 0;
//         }
//         html, body {
//           margin: 0 !important;
//           padding: 0 !important;
//           width: 100% !important;
//           height: 100% !important;
//           overflow: hidden !important;
//         }
//         #resume {
//           margin: 0 !important;
//           padding: 0 !important;
//           width: 100% !important;
//           max-width: 100% !important;
//           border-radius: 0 !important;
//           box-shadow: none !important;
//         }
//         #resume > div.p-8 {
//           padding: 40px !important;
//         }
//         .container, .max-w-screen-md, .mx-auto {
//           width: 100% !important;
//           max-width: 100% !important;
//           margin: 0 !important;
//         }
//         .rounded-lg, .shadow-lg {
//           border-radius: 0 !important;
//           box-shadow: none !important;
//         }
//       `
//     });

//     // Get the dimensions of the content
//     const dimensions = await page.evaluate(() => {
//       const body = document.body;
//       const html = document.documentElement;
      
//       const width = Math.max(
//         body.scrollWidth, body.offsetWidth,
//         html.clientWidth, html.scrollWidth, html.offsetWidth
//       );
      
//       const height = Math.max(
//         body.scrollHeight, body.offsetHeight,
//         html.clientHeight, html.scrollHeight, html.offsetHeight
//       );
      
//       return { width, height };
//     });

//     // Add buffer to dimensions
//     const width = dimensions.width + 40;
//     const height = dimensions.height + 40;

//     // Generate PDF with specific error handling
//     let pdfBuffer;
//     try {
//       pdfBuffer = await page.pdf({
//         width: `${width}px`,
//         height: `${height}px`,
//         printBackground: true,
//         pageRanges: '1',
//         scale: 1,
//         preferCSSPageSize: true,
//         margin: {
//           top: '0',
//           right: '0',
//           bottom: '0',
//           left: '0',
//         },
//       });
//     } catch (pdfError) {
//       console.error('PDF generation specific error:', pdfError);
//       await browser.close();
//       res.status(500).send('Error during PDF creation: ' + pdfError.message);
//       return;
//     }

//     // Validate PDF
//     console.log('PDF Buffer Size:', pdfBuffer.length);
//     console.log('PDF Header:', pdfBuffer.toString('utf8', 0, 20));

//     if (!pdfBuffer.toString('utf8', 0, 5).includes('%PDF-')) {
//       console.error('Generated file does not appear to be a valid PDF');
//       fs.writeFileSync(path.join(__dirname, 'debug-output.bin'), pdfBuffer);
      
//       // Try saving the PDF to disk first and then sending
//       const filename = `resume-${Date.now()}.pdf`;
//       const filepath = path.join(__dirname, 'temp');
      
//       // Create temp directory if it doesn't exist
//       if (!fs.existsSync(filepath)) {
//         fs.mkdirSync(filepath, { recursive: true });
//       }
      
//       const fullPath = path.join(filepath, filename);
//       fs.writeFileSync(fullPath, pdfBuffer);
      
//       res.status(500).send('Invalid PDF generated. Debug files saved.');
//       return;
//     }

//     await browser.close();

//     // Save to disk first approach
//     const filename = `resume-${Date.now()}.pdf`;
//     const tempDir = path.join(__dirname, 'temp');
    
//     // Create temp directory if it doesn't exist
//     if (!fs.existsSync(tempDir)) {
//       fs.mkdirSync(tempDir, { recursive: true });
//     }
    
//     const filepath = path.join(tempDir, filename);
//     fs.writeFileSync(filepath, pdfBuffer);
//     console.log(`PDF saved to ${filepath}`);
    
//     // Now serve the file
//     res.download(filepath, 'resume.pdf', (err) => {
//       if (err) {
//         console.error('Error sending file:', err);
//       }
//       // Delete the file after sending
//       try {
//         fs.unlinkSync(filepath);
//       } catch (unlinkErr) {
//         console.error('Error deleting temp file:', unlinkErr);
//       }
//     });
    
//   } catch (error) {
//     console.error('Error generating PDF:', error);
//     res.status(500).send('Error generating PDF: ' + error.message);
//   }
// };


// export const generateResumePdf = async (req, res) => {
//   try {
//     const { htmlContent } = req.body;
    
//     if (!htmlContent) {
//       return res.status(400).json({ error: 'HTML content is required' });
//     }

//     // Create styled HTML by adding the same styling from the puppeteer version
//     const styledHtml = `
//       <style>
//         @page {
//           size: auto;
//           margin: 0;
//         }
//         html, body {
//           margin: 0 !important;
//           padding: 0 !important;
//           width: 100% !important;
//           height: 100% !important;
//           overflow: hidden !important;
//         }
//         #resume {
//           margin: 0 !important;
//           padding: 0 !important;
//           width: 100% !important;
//           max-width: 100% !important;
//           border-radius: 0 !important;
//           box-shadow: none !important;
//         }
//         #resume > div.p-8 {
//           padding: 40px !important;
//         }
//         .container, .max-w-screen-md, .mx-auto {
//           width: 100% !important;
//           max-width: 100% !important;
//           margin: 0 !important;
//         }
//         .rounded-lg, .shadow-lg {
//           border-radius: 0 !important;
//           box-shadow: none !important;
//         }
//       </style>
//       ${htmlContent}
//     `;

//     // Calculate dimensions - Since html-pdf doesn't have the same level of control
//     // as puppeteer for dynamic dimensions, we'll use a format with similar settings
//     const options = { 
//       format: 'A4',
//       printBackground: true,
//       border: {
//         top: '0',
//         right: '0',
//         bottom: '0',
//         left: '0'
//       },
//       // html-pdf doesn't support custom dimensions in pixels like puppeteer
//       // but we can use the built-in A4 format and remove margins
//       // to achieve a similar result
//     };
    
//     const file = { content: styledHtml };
    
//     htmlPdf.generatePdf(file, options).then(pdfBuffer => {
//       // Add validation similar to the puppeteer version
//       if (!pdfBuffer.toString('utf8', 0, 5).includes('%PDF-')) {
//         console.error('Generated file does not appear to be a valid PDF');
//         return res.status(500).send('Invalid PDF generated');
//       }

//       res.set({
//         'Content-Type': 'application/pdf',
//         'Content-Disposition': 'attachment; filename="resume.pdf"',
//       });
      
//       res.send(pdfBuffer);
//     });
//   } catch (error) {
//     console.error('PDF generation error:', error);
//     res.status(500).json({ error: 'Failed to generate PDF' });
//   }
// }


// export const generateResumePdf = async (req, res) => {
//   try {
//     const { htmlContent } = req.body;
    
//     if (!htmlContent) {
//       return res.status(400).json({ error: 'HTML content is required' });
//     }

//     // First, measure the content height using Puppeteer
//     const browser = await puppeteer.launch({
//       headless: 'new',
//       args: ['--no-sandbox', '--disable-setuid-sandbox']
//     });
    
//     const page = await browser.newPage();
    
//     // Basic HTML for measurement
//     const basicHtml = `
//       <html>
//         <head>
//           <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
//         </head>
//         <body>
//           <div id="content">${htmlContent}</div>
//         </body>
//       </html>
//     `;
    
//     await page.setContent(basicHtml, { waitUntil: 'networkidle0' });
    
//     // Get content height
//     const contentHeight = await page.evaluate(() => {
//       const content = document.getElementById('content');
//       return content.scrollHeight;
//     });
    
//     await browser.close();
    
//     // A4 height in pixels (at 96 DPI) is approximately 1123px
//     // Leave margin of ~40px (20px top, 20px bottom)
//     const availableHeight = 1123 - 40;
    
//     // Calculate scale needed to fit content on one page
//     let scale = 1;
//     if (contentHeight > availableHeight) {
//       scale = availableHeight / contentHeight;
//       // Ensure scale doesn't go below 0.6 for readability
//       scale = Math.max(scale, 0.6);
//     }
    
//     // Create styled HTML with scaling factor
//     const styledHtml = `
//       <html>
//         <head>
//           <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
//           <style>
//             @page {
//               size: A4;
//               margin: 0;
//             }
//             html, body {
//               margin: 0 !important;
//               padding: 0 !important;
//               width: 100% !important;
//               height: 100% !important;
//               overflow: hidden !important; /* Prevent scrolling */
//             }
//             #content-wrapper {
//               transform: scale(${scale});
//               transform-origin: top center;
//               width: 100%;
//               padding: 20px;
//               box-sizing: border-box;
//             }
//             /* Preserve Tailwind styling */
//             .dotted-border { border-style: dotted !important; }
//             .underline { text-decoration: underline !important; }
//             /* Ensure content doesn't break to second page */
//             #content {
//               page-break-inside: avoid;
//               page-break-after: avoid;
//               page-break-before: avoid;
//               max-height: ${availableHeight}px;
//               overflow: hidden;
//             }
//           </style>
//         </head>
//         <body>
//           <div id="content-wrapper">
//             <div id="content">
//               ${htmlContent}
//             </div>
//           </div>
//         </body>
//       </html>
//     `;

//     // Set options for html-pdf-node
//     const options = {
//       format: 'A4',
//       printBackground: true,
//       margin: { top: '0', right: '0', bottom: '0', left: '0' },
//       args: ['--no-sandbox', '--disable-setuid-sandbox'],
//       timeout: 30000,
//       waitForNetworkIdle: true
//     };
    
//     const file = { content: styledHtml };
    
//     // Generate the PDF
//     htmlPdf.generatePdf(file, options).then(pdfBuffer => {
//       // Set response headers
//       res.set({
//         'Content-Type': 'application/pdf',
//         'Content-Disposition': 'attachment; filename="resume.pdf"',
//       });
      
//       // Send the PDF buffer
//       res.send(pdfBuffer);
//     }).catch(err => {
//       console.error('PDF generation internal error:', err);
//       res.status(500).json({ error: 'Failed to generate PDF', details: err.message });
//     });
//   } catch (error) {
//     console.error('PDF generation error:', error);
//     res.status(500).json({ error: 'Failed to generate PDF' });
//   }
// };