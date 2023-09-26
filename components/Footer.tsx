import React from 'react'

const Footer = () => {
  return (
    <div>   
      <footer className="bg-white">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
              <span className="block text-sm text-gray-500 sm:text-center ">© 2023 <a href="/" className="hover:underline">vorlesungen™</a>. All Rights Reserved.</span>
          </div>
      </footer>
    </div>
  )
}

export default Footer