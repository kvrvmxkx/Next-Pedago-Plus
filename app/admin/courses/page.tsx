import Link from 'next/link'
import React from 'react'

const Courses = () => {
  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto w-full">
        <div className='flex justify-between items-center'>
            <h1 className="text-2xl font-bold text-primary my-5">Courses</h1>
            <Link className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 rounded-md text-sm font-medium transition-all h-fit px-4 py-2" href="/admin/courses/add">Add</Link>
        </div>
    </div>
  )
}

export default Courses