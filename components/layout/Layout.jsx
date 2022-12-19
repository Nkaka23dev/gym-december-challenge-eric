import React, { Children } from 'react'
import Wrapper from './Wrapper'

export default function Layout({children}) {
  return (
    // You can replace this div with wrapper, if the whole page have same wrapper 
    <div>
        {children}
    </div>
     )
}
