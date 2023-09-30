
import * as React from "react"

import * as styles from "@styles/components/home/projects.module.scss";

export default function End() {
    return (
        <section className={styles.end}>
            <div className={styles.projectLineDot}>
                <div className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </div>
                    
                <div className={styles.projectLine}>
                    <svg className={`${styles.animateLine} ${styles.endLine}`} height="483" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path pathLength="1" d=
                           "M 13 6 C 2 98 63 128 86 154.5 C 116 184 94 288 48 229 C 13 154 251 228 160 420"
                            stroke="white" strokeWidth="3"/>
                    </svg>
                </div>
            </div>
        </section>
    )
}