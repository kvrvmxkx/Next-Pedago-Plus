import { GraduationCap, LayoutGrid, LogOut, Settings, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { auth } from '@/lib/auth';
import { headers } from "next/headers";
import SignoutButton from '@/components/auth/signOutButton';
import Image from 'next/image';
//import { sendEmail } from '@/action/sgEmail';


const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const session = await auth.api.getSession({
    headers: await headers()
  })  

  let initials:string[] = []
  initials = session!.user.name.split(' ');

  //sendEmail({to:"karacoulibaly@gmail.com",url:"localhost:3000", type:"EmailVerification"});


  return (
    <div className='bg-white h-screen w-screen'>
        <div className='app-container h-screen py-8'>
            <div className='flex gap-2 h-full'>
                <div className='w-56 border border-gray-300 rounded-xl flex flex-col justify-between gap-5 py-5 '>
                    <div className='flex flex-col gap-2'>
                        <Link href="/" className='ml-[42px] font-extrabold text-lg mb-5'>
                            <span className='text-primary'>Pedago</span>
                            <span className=''>+</span>
                        </Link>
                        <Link className='border-l-2 pr-3 border-white hover:border-primary hover:text-primary py-2 hover:bg-indigo-50 flex items-center font-semibold text-sm' 
                        href="/admin">
                        <LayoutGrid size={16} className='mx-3'/>
                        Dashboard
                        </Link>
                        <Link className='border-l-2 pr-3 border-white hover:border-primary hover:text-primary py-2 hover:bg-indigo-50 flex items-center font-semibold text-sm' 
                        href="/admin/users">
                        <Users size={16} className='mx-3'/>
                        Users</Link>
                        <Link className='border-l-2 pr-3 border-white hover:border-primary hover:text-primary py-2 hover:bg-indigo-50 flex items-center font-semibold text-sm' 
                        href="/admin/courses">
                        <GraduationCap size={16} className='mx-3'/>
                        Courses</Link>
                        <Link className='border-l-2 pr-3 border-white hover:border-primary hover:text-primary py-2 hover:bg-indigo-50 flex items-center font-semibold text-sm' href="">
                        <Settings size={16} className='mx-3'/>
                        Settings</Link>
                    </div>

                    <div>
                        <Link className='border-l-2 pr-3 border-white hover:border-indigo-50 hover:text-primary py-2 hover:bg-indigo-50 flex items-center font-semibold text-sm' href="">
                        <LogOut size={16} className='mx-3'/>
                        Sign Out</Link>
                    </div>
                </div>
                <div className='grow overflow-auto flex flex-col'>
                    <div className='border flex items-center justify-end border-gray-300 w-full rounded-xl p-2'>
                      <p className='mr-2'>
                        <span className='text-gray-500'>Hey, </span> 
                        <span className='text-primary font-semibold'>{initials[0]}</span>
                      </p>
                      <div className='group relative border-2 border-primary rounded-full'>
                        {
                          session?.user?.image ? 
                          <Image
                            className='rounded-full'
                            src={session.user.image}
                            width={32}
                            height={32}
                            alt="hero"
                          /> :
                          <div className='h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold'>
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
                    </div>
                    <div className='grow'>
                      {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default layout