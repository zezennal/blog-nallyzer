import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
// import {Link} from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site{
        siteMetadata{
          author
        }
      }
    }
  `)
  return(
    <footer>
      <p>Created by {data.site.siteMetadata.author}, c 2019</p>
    </footer>
  )
}

export default Footer