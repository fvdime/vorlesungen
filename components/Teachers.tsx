import React from 'react'

const Teachers = () => {
  return (
    <div className='max-w-screen-lg mx-auto'>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex items-center justify-between py-4 bg-white">
            <div></div>
              <label htmlFor="table-search" className="sr-only">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"  placeholder="Search for teachers"/>
              </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Classes
                      </th>
                      <th scope="col" className="px-6 py-3">
                      Email
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white border-b hover:bg-gray-100 ">
                
                      <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          <img className="w-10 h-10 rounded-full" src="/Roman.jpg" alt=""/>
                          <div className="pl-3">
                              <div className="text-base font-semibold">Bonnie Green</div>
                          </div>
                      </th>
                      <td className="px-6 py-4">
                        React 101
                      </td>
                      <td className="px-6 py-4">
                          <div className="flex items-center">
                          <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>

                          </div>
                      </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-100 ">
                
                      <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          <img className="w-10 h-10 rounded-full" src="/Roman.jpg" alt=""/>
                          <div className="pl-3">
                              <div className="text-base font-semibold">Bonnie Green</div>
                          </div>
                      </th>
                      <td className="px-6 py-4">
                        React 101
                      </td>
                      <td className="px-6 py-4">
                          <div className="flex items-center">
                          <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>

                          </div>
                      </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-100 ">
                
                      <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          <img className="w-10 h-10 rounded-full" src="/Roman.jpg" alt=""/>
                          <div className="pl-3">
                              <div className="text-base font-semibold">Bonnie Green</div>
                          </div>
                      </th>
                      <td className="px-6 py-4">
                        React 101
                      </td>
                      <td className="px-6 py-4">
                          <div className="flex items-center">
                          <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>

                          </div>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default Teachers