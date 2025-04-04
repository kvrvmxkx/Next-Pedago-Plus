import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import GoogleSignInButton from '../socialSignInButton/google'
import GithubSignInButton from '../socialSignInButton/github'

const SignSocialButton = () => {
  return (
    <div className='flex justify-center gap-1'>
        <GoogleSignInButton />
        <FaFacebook className="text-5xl text-primary border-[.3px] border-primary bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:-translate-y-2 hover:shadow-2xl hover:drop-shadow-2xl transition duration-300 ease-in-out" />
        <GithubSignInButton />
    </div>
  )
}

export default SignSocialButton