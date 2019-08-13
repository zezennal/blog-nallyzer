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

        <p>Product designer<br/>Front-end developer<br/>Full-stack UX design specialist
        </p>
        
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

        <div className={HeaderStyles.email}>
          <p>
          For business enquiries or casual chatter—do drop me a line at lp.frtoip@olleh. I ♥︎ emails.
          </p>
          <div className={HeaderStyles.icons}>
            <Link to="/">Fb</Link>
            <Link to="/">iG</Link>
            <Link to="/">iN</Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header