"use client";

import { Home, LayoutGrid, LogIn, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import { Session } from '@/lib/auth'
import SignoutButton from './auth/signOutButton'
import { usePathname } from 'next/navigation';


const Nav = ({session}:{session:Session | null}) => {

  let initials:string[] = []
  if (session?.user?.name && !session?.user?.image) {
      initials = session.user.name.split(' ');
  }

  const pathname = usePathname();
  console.log(pathname);
  

  return (
    <>
      {
        /**
        *! Medium and large device
        */
      }
      <div className='hidden md:flex justify-between py-2 my-3 app-container'>
        <div>
          <Link href='/' className='text-2xl font-extrabold'>
            <span className='text-primary'>Pedago</span>
            <span className=''>+</span>
          </Link>
        </div>

        <div className='my-auto'>
          <ul className="flex gap-2 lg:gap-8">
            <li>
              {/* <Link className={({ isActive }) => (isActive ? " text-primary" : "hover:text-primary")} to='/'>Home</Link> */}
              <Link href="/" className="" aria-current="page">Home</Link>
            </li>
            <li>
              <a href="courses" className="">Courses</a>
            </li>
            <li>
              <Link href="/#pricing" className="">Pricing</Link>
            </li>
            <li>
              <a href="/about-us" className="">About</a>
            </li>
            <li>
              <a href="/contact" className="">Contact</a>
            </li>
          </ul>
        </div>

        {
          session?.user 
          ? 
          <div className='group relative'>

            {
              session?.user?.image ? 
              <Image
                className='rounded-full'
                src={session.user.image}
                width={40}
                height={40}
                alt="hero"
              /> :
              <div className='h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold'>
                <span>{`${initials[0][0]}${initials[1][0]}`}</span>
              </div>
            }


            <div id="dropdownHover" className="absolute group-hover:flex bg-white flex-col z-10 hidden right-0 rounded-lg shadow-sm w-48 transition ease-in-out duration-500">
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      <p className='font-extrabold whitespace-nowrap overflow-hidden overflow-ellipsis resize-none w-40'>{session?.user?.name}</p>
                      <p className='text-xs whitespace-nowrap overflow-hidden overflow-ellipsis resize-none w-40'>{session?.user?.email}</p>
                    </a>
                  </li>
                  <hr className='my-2 border-gray-300' />
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</a>
                  </li>
                  <hr className='my-2 border-gray-300'/>
                  <li>
                    <SignoutButton />
                  </li>
                </ul>
            </div>
          </div>
          : 
            <div className='my-auto'>
              <ul className="flex gap-2">
                <li>
                  <a href="/sign-in" className="cursor-pointer">Sign In</a>
                </li>
                <li>
                  <a href="/sign-up" className="bg-primary text-white px-5 py-3 mx-1 rounded-md cursor-pointer">Sign up</a>
                </li>
              </ul>
            </div>
        }



      </div>

      {
        /**
        *! Small device
        */
      }

      <div className='flex md:hidden z-10 justify-between fixed w-full bottom-0 left-0 right-0 p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.1)] bg-white'>
        <Link href='/' className="bg-white flex flex-col gap-1 items-center justify-center text-gray-900">
          <Home />
          <p className='text-xs'>Home</p>
        </Link>

        <a href='/courses' className="bg-white flex flex-col gap-1 items-center justify-center text-gray-900">
          <LayoutGrid />
          <p className='text-xs'>Courses</p>
        </a>

        <a href='/contact' className="bg-white flex flex-col gap-1 items-center justify-center text-gray-900">
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