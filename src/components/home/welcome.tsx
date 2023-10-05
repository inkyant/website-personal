
import { animOptions } from "@pages";
import * as styles from "@styles/components/home/welcome.module.scss"

import { fadeinAnim, fadeAnim } from '@styles/components/home/projects.module.scss'

import onVisible from "@components/common/visible";

import * as React from 'react';

export default function Welcome() {

    const arrowRef = React.useRef<HTMLDivElement>(null)

    const [animating, setAnimating] = React.useState(false)

    React.useEffect(() => {
        // when arrow moves up, fade
        return onVisible([arrowRef.current], animOptions,
            (entry: IntersectionObserverEntry) => setAnimating(entry.isIntersecting)
        )
    }, [])

    return (
        <section>
            <div>

                <p className={styles.welcomeText}>
                    I work on projects across CS, Robotics, AI, and more.
                </p>

                <a className={styles.welcomeContinue}>
                    See what I do
                </a>

                <div className={styles.welcomeLine}>
                    <div ref={arrowRef} className={`${styles.welcomeArrow} ${animating && fadeAnim}`} style={animating ? {opacity: 0} : {opacity: 1}}>
                        <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9393 38.7707C11.5251 39.3565 12.4749 39.3565 13.0607 38.7707L22.6066 29.2247C23.1924 28.639 23.1924 27.6892 22.6066 27.1034C22.0208 26.5176 21.0711 26.5176 20.4853 27.1034L12 35.5887L3.51472 27.1034C2.92893 26.5176 1.97919 26.5176 1.3934 27.1034C0.807611 27.6892 0.807611 28.639 1.3934 29.2247L10.9393 38.7707ZM10.5 0.210022V37.71H13.5V0.210022H10.5Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}