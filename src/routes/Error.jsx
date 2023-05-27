import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Error = () => {
  return (
   <>
      <div className='flex items-center justify-center flex-col gap-3 h-96'>
        <div className='flex items-center gap-1'>
            <ExclamationTriangleIcon className='icon-theme' />
            <h1 className='text-xl font-medium uppercase'>404 Page Not Found</h1>
        </div>
        <NavLink to={`/`} className="underline text-blue-500">Back To Home</NavLink>
      </div>
   </>
  )
}
