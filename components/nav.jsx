import { Home, LayoutGrid, LogIn, Phone } from 'lucide-react'
import React from 'react'

const Nav = () => {
  return (

    <>
      {
        /**
        *! Medium and large device
        */
      }
      <div className='hidden md:flex justify-between py-2 my-3 app-container'>
        <div>
          <a href='/' className='text-2xl font-extrabold'>
            <span className='text-primary'>Pedago</span>
            <span className=''>+</span>
          </a>
        </div>

        <div className='my-auto'>
          <ul className="flex gap-2 lg:gap-8">
            <li>
              {/* <Link className={({ isActive }) => (isActive ? " text-primary" : "hover:text-primary")} to='/'>Home</Link> */}
              <a href="/" className="" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="">Course</a>
            </li>
            <li>
              <a href="/#pricing" className="">Pricing</a>
            </li>
            <li>
              <a href="/about-us" className="">About</a>
            </li>
            <li>
              <a href="/contact" className="">Contact</a>
            </li>
          </ul>
        </div>


        <div className='my-auto'>
          <ul className="flex gap-2">
            <li>
              <a href="/signin" className="">Sign In</a>
            </li>
            <li>
              <a href="/register" className="bg-primary text-white px-5 py-3 mx-1 rounded-md ">Register</a>
            </li>
          </ul>
        </div>
      </div>

      {
        /**
        *! Small device
        */
      }

      <div className='flex md:hidden z-10 justify-between fixed w-full bottom-0 left-0 right-0 p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.1)] bg-white'>
        <a href='/' className="bg-white flex flex-col gap-1 items-center justify-center text-gray-900">
          <Home />
          <p className='text-xs'>Home</p>
        </a>

        <a href='/' className="bg-white flex flex-col gap-1 items-center justify-center text-gray-900">
          <LayoutGrid />
          <p className='text-xs'>Courses</p>
        </a>

        <a to='/contact' className="bg-white flex flex-col gap-1 items-center justify-center text-gray-900">
          <Phone />
          <p className='text-xs'>Contact</p>
        </a>

        <a href='/signin' className='bg-white text-gray-950 hover:bg-white'>
          <div className='flex flex-col gap-1 items-center justify-center'>
            <LogIn />
            <p className='text-xs'>Log in</p>
          </div>
        </a>
      </div>

    </>

  )
}

export default Nav