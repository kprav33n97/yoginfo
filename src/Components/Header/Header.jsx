import React from 'react'

const Header = () => {
  return (
    <div className='header-main' id='site-navigation'>
        <div className="container mx-auto px-[15px]">
         <div className="flex items-center justify-between">
          <div className="site-branding">
            <h1 className='site-title'><a href=""><span>YOG</span>INFO</a></h1>
          </div>
          <nav className="main-navigation">
            <ul className='flex items-center gap-4'>
                <li><a href="#">Why do yoga?</a></li>
                <li><a href="#">How to do?</a></li>
            </ul>
          </nav>
         </div>
        </div>
    </div>
  )
}

export default Header
