import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.js")
  }, [])
  
  return <Component {...pageProps}/>

}

export default MyApp
