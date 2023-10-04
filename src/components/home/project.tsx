
import * as React from "react"

import * as styles from '@styles/components/home/projects.module.scss'
import { animOptions } from "@pages";
import onVisible from "@components/common/visible";

export default function Project({title, text, images}: {title: string, text: string, images?: string[]}) {
    
    let slider;

    if (images) {
        // TODO: move swiper.js to react
    }

    const circleRef = React.useRef<HTMLDivElement>(null)
    const projectRef = React.useRef<HTMLDivElement>(null)

    const [animating, setAnimating] = React.useState(false)

    React.useEffect(() => {
        // when they are visible, animate them in
        return onVisible([circleRef.current, projectRef.current], animOptions,
            (entry: IntersectionObserverEntry) => setAnimating(entry.isIntersecting)
        )
    }, [])

    return (
    <section className={styles.project}>
        <div ref={projectRef} style={{position: 'relative'}}>
            <div ref={circleRef} className={`${styles.circle} ${animating ? styles.growAnim : styles.ungrowAnim}`} />

            <div className={`${styles.projectContent} ${animating ? styles.fadeinAnim : styles.fadeAnim}`}>

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