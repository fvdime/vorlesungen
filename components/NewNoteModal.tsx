import React, {useRef} from 'react'

const NewNoteModal = ({open, onClose}: any) => {

  const wrapperRef = useRef();

  const onCloseHandle = (event: any) => {
    if (wrapperRef.current && wrapperRef.current.contains(event.target)) {
      return;
    } else {
      onClose();
   }
  };
  
  if (!open) return <></>;
  
  return (
      <div>
        <div
          className="fixed z-100 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
          onClick={onCloseHandle}
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow" ref={wrapperRef}>
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                onClick={onClose}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6">
                <div className="text-2xl text-bold">New Task</div>
  
                <div className="flow-root self-start">
                  <ul className="divide-y divide-gray-200">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0 justify-start">
                          <label
                            htmlhtmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Title
                          </label>
                          <input
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                            placeholder="Title..."
                            // value={title}
                            // onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0 justify-start">
                          <label className="mb-2 text-sm font-medium text-gray-900">
                            Description
                          </label>
                          <input
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                            placeholder="Description..."
                            // value={desc}
                            // onChange={(e) => setDesc(e.target.value)}
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="text-white bg-lime-500 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm inline-flex items-center px-7 py-2.5 text-center mr-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default NewNoteModal