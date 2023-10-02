
import * as React from "react"

import * as styles from '@styles/components/home/projects.module.scss'

export default function Project({title, text, images}: {title: string, text: string, images?: string[]}) {
    
    let slider;

    if (images) {
        // TODO: move swiper.js to react
    }

    return (
    <section className={styles.project}>
        <div>
            <div className={styles.projectLineDot}>
                <div className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </div>
            </div>

            <div className={styles.projectContent}>

                <h3 className={styles.projectTitle}>{title}</h3>
                
                {slider}

                <p className={styles.projectText}>
                    {text}
                </p>
            </div>
        </div>
    </section>
    )
}