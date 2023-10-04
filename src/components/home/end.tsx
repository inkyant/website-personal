
import * as React from "react"

import * as styles from "@styles/components/home/projects.module.scss";
import { animOptions } from "@pages";
import onVisible from "@components/common/visible";

export default function End() {

    const circleRef = React.useRef<HTMLDivElement>(null)

    const [animating, setAnimating] = React.useState(false)

    React.useEffect(() => {
        if (circleRef.current) {
            // on visible, animate the circle in
            return onVisible([circleRef.current], animOptions, 
                (entry: IntersectionObserverEntry) => setAnimating(entry.isIntersecting)
            )
        }
    }, [])

    return (
        <section className={styles.end}>
            <div ref={circleRef} className={`${styles.circle} ${animating ? styles.growAnim : styles.ungrowAnim}`} />

            <div className={styles.projectLineDot}>
                <div className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </div>
            </div>
        </section>
    )
}