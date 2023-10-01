
import * as React from "react"

import * as styles from "@styles/components/home/projects.module.scss";

export default function End() {
    return (
        <section className={styles.end}>
            <div className={styles.projectLineDot}>
                <div className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </div>
            </div>
        </section>
    )
}