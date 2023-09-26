import React from 'react'
import Videos from './Videos'

const Lectures = () => {
  return (
    <div className='max-w-screen-lg mx-auto my-5'>
      <div className="container my-5 mx-auto md:px-6">
        <section className="mb-32 text-center lg:text-left">
        <h5 className="mb-4 text-lg font-semibold text-neutral-500 text-start">Hi, Username!</h5>
          <h2 className="mb-8 text-start text-2xl font-bold">
            Classes to review
          </h2>

          <div className="grid gap-6 lg:grid-cols-3">
            <Videos/>
            <Videos/>
            <Videos/>
            <Videos/>
            <Videos/>
            <Videos/>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Lectures