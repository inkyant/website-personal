
import React from "react"

import * as styles from "@styles/components/home/projects.module.scss";
import { animOptions } from "@pages";
import onVisible from "@components/common/visible";

export default function End() {

    const circleRef = React.useRef<HTMLDivElement>(null)

    const [animating, setAnimating] = React.useState(false)

    React.useEffect(() => {
        // on visible, animate the circle in
        return onVisible([circleRef.current], animOptions(), 
            (entry: IntersectionObserverEntry) => setAnimating(entry.isIntersecting)
        )
    }, [])

    return (
        <section className={styles.end}>
            <div ref={circleRef} className={`${styles.circle} ${animating ? styles.growAnim : styles.ungrowAnim}`} />
            <div className={styles.endLinksContainer}>
                    <a className={styles.endLink} href="mailto:apfurman@ucsc.edu">Email</a>
                    <a className={styles.endLink} href="https://github.com/inkyant">Github</a>
                    <a className={styles.endLink} href="https://www.linkedin.com/in/anthony-furman-256b44284/">Linkedin</a>
            </div>
        </section>
    )
}