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
    <div className={HeaderStyles.wrapper}>
      <header className={HeaderStyles.header}>
        <h1>
          <Link className={HeaderStyles.logo} to="/">{data.site.siteMetadata.author}</Link>
        </h1>
        <nav>
          <ul className={HeaderStyles.navList}>
            <li>
              <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/blog">Blog</Link>
            </li>
            <li>
              <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/work">Work</Link>
            </li>
            <li>
              <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/aboutMe">About Me</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header