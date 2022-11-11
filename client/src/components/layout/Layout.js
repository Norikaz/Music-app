import React, { Fragment } from 'react'
import { Navigation } from './Navigation'

export const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      
      <main>
        {props.children}
      </main>
    </Fragment>
  )
}
