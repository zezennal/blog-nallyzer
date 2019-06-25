import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return(
    <Layout>
      <h1>helloo</h1>
      <h2>i'm nallyzer, a front-end developer living in hot karawang</h2>
      <p>Need a developer? <Link to="contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage
