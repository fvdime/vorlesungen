import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      
<nav className="bg-lime-100">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg p-4">
        <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap">volsungen</span>
        </Link>
        <div className="flex items-center">
            <Link href="tel:5541251234" className="mr-6 text-sm  text-gray-900 hover:underline">Help</Link>
            <Link href="#" className="text-sm text-gray-900 hover:underline">username</Link>
        </div>
    </div>
</nav>
<nav className="border-y border-gray-200">
    <div className="max-w-screen-lg px-4 py-2 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <Link href="#" className="text-gray-900 hover:underline" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link href="#" className="text-gray-900 hover:underline">Classes</Link>
                </li>
                <li>
                    <Link href="#" className="text-gray-900 hover:underline">Teachers</Link>
                </li>
                <li>
                    <Link href="#" className="text-gray-900 hover:underline">Students</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </div>
  )
}

export default Navbar