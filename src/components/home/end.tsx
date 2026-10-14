
import React from "react"

import styles from "@styles/components/home/projects.module.scss";
import { animOptions } from "@components/defines";
import onVisible from "@components/common/visible";

const ENC = [98, 110, 109, 115, 96, 98, 115, 63, 96, 109, 115, 103, 110, 109, 120,
    101, 116, 113, 108, 96, 109, 45, 98, 110, 108]

export default function End() {

    const circleRef = React.useRef<HTMLDivElement>(null)

    const [animating, setAnimating] = React.useState(false)

    React.useEffect(() => {
        // on visible, animate the circle in
        return onVisible([circleRef.current], animOptions(), 
            (entry: IntersectionObserverEntry) => setAnimating(entry.isIntersecting)
        )
    }, [])

    function onClickEmail(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault()
        window.location.href = "mailto:" + String.fromCharCode(...ENC.map(v => v + 1))
    }

    return (
        <section className={styles.end}>
            <div ref={circleRef} className={`${styles.circle} ${animating ? styles.growAnim : styles.ungrowAnim}`} style={{marginTop: -10}}/>
            <div className={styles.endLinksContainer}>
                    <a className={styles.endLink} onClick={onClickEmail} href="#">Email</a>
                    <a className={styles.endLink} href="https://github.com/inkyant">Github</a>
                    <a className={styles.endLink} href="https://www.linkedin.com/in/anthony-furman-256b44284/">Linkedin</a>
            </div>
        </section>
    )
}