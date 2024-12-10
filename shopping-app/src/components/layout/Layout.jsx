 import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
// import Navbar from '../navbar/Navbar'
 
 function Layout({children}) {
   return (
     <div>
        <Navbar/>
        <div className='context'>
            {children}
        </div>
        <Footer/>
        


       
     </div>
   )
 }
 
 export default Layout
 