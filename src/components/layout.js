import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import LayoutStyles from './layout.module.scss'

const Layout = (props) => {
  return(
    <div className={LayoutStyles.container}>
      <Header/>
        <div className={LayoutStyles.content}>
          {props.children}
        </div>
      <Footer/>
    </div>
  )
}

export default Layout