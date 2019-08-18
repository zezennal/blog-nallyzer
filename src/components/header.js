import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import TextLoop from 'react-text-loop'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

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

        <TextLoop
          springConfig={{ stiffness: 180, damping: 8 }}>
            <p>Product designer</p>
            <p>Front-end developer</p>
            <p>Full-stack UX design specialist</p>
        </TextLoop>{" "}
        
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
            <Link to="/"><FaInstagram/></Link>
            <Link to="/"><FaGithub/></Link>
            <Link to="/"><FaLinkedin/></Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header