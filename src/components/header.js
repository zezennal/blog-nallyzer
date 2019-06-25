import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import HeaderStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          author
        }
      }
    }
  `)

  return (
    <header className={HeaderStyles.header}>
      <h1>
        <Link className={HeaderStyles.title} to="/">{data.site.siteMetadata.author}</Link>
      </h1>
      <nav>
        <ul className={HeaderStyles.navList}>
          <li>
            <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/">Home</Link>
          </li>
          <li>
            <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/blog">Blog</Link>
          </li>
          <li>
            <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header