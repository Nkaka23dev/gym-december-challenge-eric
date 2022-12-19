import React from 'react'

export default function Wrapper({children}) {
  return (
    <div className='box-content max-w-[75rem] mx-auto px-4 md:px-0 xl:px-0'>
        {children}
    </div>
  )
}
