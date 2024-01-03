
import React from "react"

import * as styles from '@styles/components/home/projects.module.scss'
import { animOptions, parseHtml } from "@pages";
import onVisible from "@components/common/visible";
import { Link } from "gatsby";

export default function Project({title, textHtml, slug, images}: {title: string, textHtml: string, slug: Text, images?: string[]}) {
    
    let slider;

    if (images) {
        // TODO: add swiper
    }

    // extract short text (line #2) and long text (line #3)
    let [ , shortText, , longText] = parseHtml(textHtml)

    const circleRef = React.useRef<HTMLDivElement>(null)
    const projectRef = React.useRef<HTMLDivElement>(null)

    const [animating, setAnimating] = React.useState(false)

    React.useEffect(() => {
        // when they are visible, animate them in
        return onVisible([circleRef.current, projectRef.current], animOptions(),
            (entry: IntersectionObserverEntry) => setAnimating(entry.isIntersecting)
        )
    }, [])

    return (
    <section className={styles.project}>
        <div ref={projectRef}>
            <div ref={circleRef} className={`${styles.circle} ${animating ? styles.growAnim : styles.ungrowAnim}`} />

            <div className={`${styles.projectContent} ${animating ? styles.fadeinAnim : styles.fadeAnim}`}>

                <h3 className={styles.projectTitle}>{title}</h3>
                
                {slider}

                
                <div className={styles.projectText}>
                    <div className={styles.shortText}>
                        <p>{shortText}</p>
                        <Link className={styles.readMoreLink} to={`/project/${slug}`}>Read More</Link>
                    </div>
                    <p className={styles.longText}>
                        {longText}
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}