
import React, { useEffect, useRef, useState } from "react"

import * as styles from '@styles/components/home/projects.module.scss'
import { parseHtml } from "@pages";
import { animOptions, loadInOptions } from "@components/defines";
import onVisible from "@components/common/visible";
import { Link } from "gatsby";
import Slider from "@components/common/slider";

export default function Project({title, textHtml, slug, images}: {title: string, textHtml: string, slug: Text, images: string[] | null}) {
    
    const slider = <Slider images={images} />

    // extract short text (line #2) and long text (line #3)
    let [ , shortText, , longText] = parseHtml(textHtml)

    const circleRef = useRef<HTMLDivElement>(null)
    const projectRef = useRef<HTMLDivElement>(null)

    // loaded used for lazy-loading
    const loaded = useRef(false)

    const [animating, setAnimating] = useState(false)

    useEffect(() => {
        // when they are visible, animate them in
        return onVisible([circleRef.current, projectRef.current], animOptions(),
            (entry: IntersectionObserverEntry) => setAnimating(entry.isIntersecting)
        )
    }, [])

    useEffect(() => {
        // when they are almost visible, load them in
        return onVisible([projectRef.current], loadInOptions(),
            (entry: IntersectionObserverEntry) => {
                loaded.current = loaded.current || entry.isIntersecting
            }
        )
    }, [])

    return (
    <section className={styles.project}>
        <div ref={projectRef}>
            {loaded.current && <>
            <div ref={circleRef} className={`${styles.circle} ${animating ? styles.growAnim : styles.ungrowAnim}`} />

            <div className={`${styles.projectContent} ${animating ? styles.fadeinAnim : styles.fadeAnim}`}>
                {slider}
                
                <div className={styles.projectText}>
                    <h3 className={styles.projectTitle}>{title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: shortText }}/>
                    <Link className={styles.readMoreLink} to={`/project/${slug}`}>Read More</Link>
                </div>
            </div> 
            </>}
        </div>
    </section>
    )
}