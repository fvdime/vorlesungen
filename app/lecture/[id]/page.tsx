import Notes from '@/components/Notes'
import Link from 'next/link'
import React from 'react'

const Lecture = () => {
  return (
    <div className=''>
      <div className='bg-lime-100'>
      <div className="flex flex-wrap  items-center mx-auto max-w-screen-xl p-4">
        <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap border-r pr-3 border-gray-300">volsungen</span>
        </Link>
        <div className="pl-2 text-semibold font-medium">
            Authentication with Json Web Token
        </div>
    </div>
      </div>
      <div className="w-full h-auto max-w-screen-lg mx-auto">
        <video className="w-full" controls>
          <source src="/docs/videos/flowbite.mp4" type="video/mp4"/>
        </video>
        <div>
          <div className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            <img className="w-10 h-10 rounded-full" src="/Roman.jpg" alt=""/>
            <div className="pl-3">
              <div className="text-base font-semibold">Bonnie Green</div>
            </div>
          </div>
        </div>
        <Notes/>
      </div>
    </div>
  )
}

export default Lecture