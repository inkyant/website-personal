
import React from "react"
import * as styles from '@styles/components/common/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
          <div className={styles.footerNav}>
              <a href="" className={styles.footerNavItem}>Home</a>
              <a href="" className={styles.footerNavItem}>About</a>
          </div>
          <p className={styles.footerCopyright}>
              Designed and built by Anthony Furman.
          </p>
      </div>
    </footer>
  )
}