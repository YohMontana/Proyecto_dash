import React from 'react'
import Sidebar from './Sidebar'

export const Layout = (props) => {
  return (
    <div>
        <Sidebar/>
        {props.children}
    </div>
  )
}
