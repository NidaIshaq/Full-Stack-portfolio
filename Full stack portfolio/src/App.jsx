import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/home"
import About from "./components/About.jsx"
import Portfolio from "./components/Portfolio.jsx"
import Experience from "./components/Experience.jsx"
import Footer from "./components/Footer.jsx"
import Contact from "./components/Contact.jsx"
import toast, { Toaster } from 'react-hot-toast';
import Port from "./components/Port.jsx"



function App() {
  

  return (
    <>
    <div>
   <Navbar/>
   <Home/>
<About/>
{/* <Port/> */}

<Portfolio/>
<Experience/>
<Contact/>
<Footer/>
</div>
<Toaster/>
    </>
  )
}

export default App;
