import { buttonVariants } from '@/components/ui/button'
import { CircleCheckBig } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const EmailVerified = () => {
  return (
   	<div className="flex flex-col items-center justify-center grow p-4">
		<CircleCheckBig className='mb-4 text-green-500' size={150} />
		<h1 className="text-lg font-bold">
			Email Verified!
		</h1>
		<p className="mb-4 text-gray-600">
			Your email has been successfully verified.
		</p>
		<Link
			href="/"
			className={buttonVariants({
				variant: "default",
			})}
		>
			Go to home
		</Link>
	</div>
  )
}

export default EmailVerified