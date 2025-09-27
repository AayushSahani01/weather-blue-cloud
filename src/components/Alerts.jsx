import React from 'react'

const Alerts = () => {
  return (
   <div role="alert" className="alert alert-vertical sm:alert-horizontal pt-12 text-center">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info h-6 w-6 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <div>
    <h3 className="font-bold">New message!</h3>
    <div className="text-xs pb-4">You have 1 unread message</div>
  </div>
  <button className=" bg-sky-500 w-fit font-semibold text-md text-white px-6 py-1 cursor-pointer  rounded-md hover:bg-blue-600 hover:scale-[1.04] shadow-lg transition duration-300 ease-in-out">See</button>
</div>
  )
}

export default Alerts;
