import AuthForm from '@/components/AuthForm'
import Image from 'next/image'
import React from 'react'

const Auth = () => {
  
  return (
    <div className="h-full w-full fixed ">
      <Image src="/Roman.jpg" alt="" fill className='z-[-10] object-cover'/>
      <div className='bg-black w-full h-full bg-opacity-25'>
        <nav className='text-3xl font-semibold text-gray-200 p-3'>vorlesugen</nav>
        <div className='max-w-screen-lg mx-auto flex items-center justify-center'>
          <AuthForm />
        </div>
      </div>
    </div>
  )
}

export default Auth