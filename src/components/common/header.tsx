
import React from "react"
import * as styles from '@styles/components/common/header.module.scss'
import { Link } from "gatsby-link"

export default function Header() {

    function onClickContact() {
        const scrollArea = document.querySelector("#scrollArea")
        if (scrollArea) {
            scrollArea.scrollTop = scrollArea.scrollHeight - scrollArea.clientHeight
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <a href="/" className={styles.headerTitle}>
                    Anthony Furman.
                </a>
                <nav className={styles.headerNav}>
                    <Link to="/" className={styles.headerNavItem}>Home</Link>
                    <Link to="/about" className={styles.headerNavItem}>About</Link>
                </nav>
            </div>
        </header>
    )
}