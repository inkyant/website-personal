
import * as React from "react"

import * as styles from '@styles/components/home/projects.module.scss'
import Drawn from "@components/common/drawn";

export default function Project({title, text, images, lineType}: {title: string, text: string, images?: string[], lineType: number}) {
    
    let slider;

    if (images) {
        // TODO: move swiper.js to react
    }

    let lineSvg;
    if (lineType == 1) {
        lineSvg = <Drawn path="M13 0.5C-30.5 285.5 94.5 281.5 13 468.5"></Drawn>
    } else if (lineType == 2) {
        lineSvg = <svg width="103" height="467" viewBox="0 0 103 467" fill="none" xmlns="http://www.w3.org/2000/svg"><path pathLength="1" d="M13 0.5C12.8414 50.8751 -1.10819 139.319 11.5 204C33.991 319.38 94.7921 398.423 100.5 330.5C107.266 249.982 34.3602 289.008 6.50001 360.5C-12.9849 410.5 33.8799 434.784 13 465.5" stroke="white" strokeWidth="3"/></svg>
    } else {
        lineSvg = <svg width="34" height="468" viewBox="0 0 34 468" fill="none" xmlns="http://www.w3.org/2000/svg"><path pathLength="1" d="M13 0.5C3.28773 54.7716 38.6635 117.5 25.5 150.5C-46.5 331 79.409 315.61 13 467" stroke="white" strokeWidth="3"/></svg>   
    }

    return (
    <section className={styles.project}>
        <div className={styles.projectContainer}>
            <div className={styles.projectLineDot}>
                <div className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </div>
                
                <div className={styles.projectLine}>
                    {lineSvg}
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