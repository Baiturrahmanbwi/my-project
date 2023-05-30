import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.js")
  }, [])
  
  return (
    <>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"/>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"/>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" />
      
      <Component {...pageProps}/>
    </>
  )
}

export default MyApp
