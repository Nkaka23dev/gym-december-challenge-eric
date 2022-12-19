import React from 'react'

export default function Wrapper({children}) {
  return (
    <div className='box-content max-w-6xl mx-auto px-2 md:px-0 xl:px-0'>
        {children}
    </div>
  )
}
