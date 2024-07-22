import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Whydoyoga from '../../Pages/Why/Whydoyoga';

const Header = () => {
  return (
    <div className='header-main p-6' id='site-navigation'>
        <div className="container mx-auto px-[15px]">
         <div className="flex items-center justify-between">
          <div className="site-branding">
            <h1 className='site-title'><Link to={`/`}><span className='font-black'>YOG</span>INFO</Link></h1>

          </div>
          <nav className="main-navigation">
            <ul className='flex items-center gap-4'>
                {/* <li><a href="#"></a></li> */}
                <li> <Link to={`why`}>Why do yoga?</Link></li>
                <li> <Link to={`how`}>How do yoga?</Link></li>
                {/* <li><a href="#">How to do?</a></li> */}
            </ul>
          </nav>
         </div>
        </div>
    </div>
  )
}

export default Header
