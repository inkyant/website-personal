
import React from "react"

import * as styles from '@styles/components/common/footer.module.scss'
import { Link } from "gatsby-link"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
          <div className={styles.footerNav}>
              <Link to="/" className={styles.footerNavItem}>Home</Link>
              <Link to="/about" className={styles.footerNavItem}>About</Link>
          </div>
          <p className={styles.footerCopyright}>
              Designed and built by Anthony Furman.
          </p>
      </div>
    </footer>
  )
}