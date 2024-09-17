
import React from "react"

import * as styles from '@styles/components/common/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p className={styles.footerCopyright}>
            Designed and built by Anthony Furman.
        </p>
    </footer>
  )
}