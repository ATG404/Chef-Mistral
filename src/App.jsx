import Head from "./components/Header"
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from "./components/Main"
createRoot(document.getElementById('root')).render(
      <>
      <Head/>
      <Main/>
      </>
)
