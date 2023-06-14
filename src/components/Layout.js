import React from 'react'

const Layout = (props) => {
  return (
    <div className={`${props.className} mt-14 min-h-[50vh]`}>
        {props.children}
    </div>
  )
}

export default Layout;