import React, { useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"
import { Toaster } from 'react-hot-toast'  // Keep the import for Toaster
import AppRouter from './AppRouter'
import { HelmetProvider } from 'react-helmet-async'
import { BASEURL } from './utility/config'
import { setAllJobs } from './redux/jobSlice'
import axios from 'axios'
import { useDispatch } from 'react-redux'




function App() {

  const dispatch = useDispatch()


  const fetchAllJobs = async () => {
    try {


      const res = await axios.get(`${BASEURL}/jobs_post/jobs`, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })



      dispatch(setAllJobs(res?.data))
      // setLoading(false);


    } catch (err) {
      console.log(err)

    }
  }



  useEffect(() => {
    fetchAllJobs()
  }, [])

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Toaster /> {/* This will show toast notifications */}
          <AppRouter />

        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
