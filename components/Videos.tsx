import React from 'react'

const Videos = () => {
  return (
    <>
      <div className="mb-12 lg:mb-0">
        <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg" className="w-full" />
                <a href="#!">
                <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                </a>
              </div>
              <h5 className="mb-4 text-lg font-bold">Authentication with Json Web Token</h5>
              <p className=" ont-light text-sm text-gray-700">
                Teacher Faya
              </p>
            </div>
    </>
  )
}

export default Videos