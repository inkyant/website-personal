
import React from "react"

import * as styles from '@styles/components/common/header.module.scss'

export default function Header() {

    function onClickContact() {
        const scrollArea = document.querySelector("#scrollArea")
        if (scrollArea) {
            scrollArea.scrollTo({top: scrollArea.scrollHeight - scrollArea.clientHeight, behavior: "smooth"})
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <a href="/" className={styles.headerTitle}>
                    Anthony Furman.
                </a>
                <nav className={styles.headerNav}>
                    <a href="/" className={styles.headerNavItem}>Home</a>
                    <a onClick={onClickContact} className={styles.headerNavItem}>Contact</a>
                </nav>
            </div>
        </header>
    )
}