import React, {useState} from 'react'

const Notes = () => {
  return (
    <div className='max-w-screen-lg mx-auto sm:m-3'>
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
        <div className='border-b border-gray-700 flex flex-row justify-between items-center py-3'>
          <div className='font-semibold text-lg'>Notes</div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="text" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"  placeholder="Search for notes"/>
            </div>
          </div>
        <form className='my-5'>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
              <div className="px-4 py-2 bg-white rounded-t-lg ">
                  <label htmlFor="comment" className="sr-only">Your comment</label>
                  <textarea rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0 " placeholder="Write a note..." required></textarea>
              </div>
              <div className="flex items-center justify-end px-3 py-2 border-t ">
                  <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-lime-600 rounded-lg focus:ring-4 focus:ring-lime-200">
                      Add Note
                  </button>
              </div>
          </div>
        </form>
          <div className="flex items-center justify-between py-4 bg-white">
              
          </div>
          <div className="w-full text-sm text-left text-gray-500 flex gap-3 justify-center items-center">
              

            <div className="block max-w-sm p-6 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-gray-200">
              <p className="font-medium text-base text-gray-900 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non mollitia tenetur expedita commodi consectetur eius error praesentium. Eos optio quae aliquam quos, dignissimos molestias sint repellendus qui veniam quam?</p>
              <div className="flex items-center justify-center mt-4 space-x-3 md:mt-6">
                <button className="inline-flex items-center px-5 py-1 text-sm font-medium text-center border border-slate-600 text-slate-800 bg-white rounded-lg hover:bg-slate-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 ">Edit</button>
                <button className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-red-900 bg-white border border-red-700 rounded-lg  hover:text-white hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-gray-200">Delete</button>
              </div>
            </div>
            <div className="block max-w-sm p-6 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-gray-200">
            <p className="font-medium text-base text-gray-900 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non mollitia tenetur expedita commodi consectetur eius error praesentium. Eos optio quae aliquam quos, dignissimos molestias sint repellendus qui veniam quam?</p>
              <div className="flex items-center justify-center mt-4 space-x-3 md:mt-6">
                <button className="inline-flex items-center px-5 py-1 text-sm font-medium text-center border border-slate-600 text-slate-800 bg-white rounded-lg hover:bg-slate-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 ">Edit</button>
                <button className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-red-900 bg-white border border-red-700 rounded-lg  hover:text-white hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-gray-200">Delete</button>
            </div>
          </div>
          <div className="block max-w-sm p-6 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-gray-200">
          <p className="font-medium text-base text-gray-900 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non mollitia tenetur expedita commodi consectetur eius error praesentium. Eos optio quae aliquam quos, dignissimos molestias sint repellendus qui veniam quam?</p>
              <div className="flex items-center justify-center mt-4 space-x-3 md:mt-6">
                <button className="inline-flex items-center px-5 py-1 text-sm font-medium text-center border border-slate-600 text-slate-800 bg-white rounded-lg hover:bg-slate-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 ">Edit</button>
                <button className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-red-900 bg-white border border-red-700 rounded-lg  hover:text-white hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-gray-200">Delete</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Notes