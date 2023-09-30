
import React, { useRef } from "react";

// configure the settings. 
// precision is the % step at which we animate, for example 0.01 draws 1% of the line for every 1% scrolled
const PRECISION = 0.01
// the pixels above the bottom of the viewport at which the line is "drawn" (just for the percent intersection, the line can go up)
const ANIM_MARGIN = 300
// options is used by IntersectionObserver, see the docs. We configure it to callback every precision% and 
// only call back at ANIM_MARGIN px above the bottom of the viewport
const options = {
    threshold: Array.from({length: (1 / PRECISION) + 1}, (value, index) => index*PRECISION),
    rootMargin: "0px 0px -" + ANIM_MARGIN + "px 0px",
}

// TODO: use forwarded refs to draw previous and next line fully

export default function Drawn({ path }: { path: string }) {
    
    const [drawnPercent, setDrawnPercent] = React.useState(0)

    let intersectionCallback: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
          // check if visible, and if is below viewport. or it will animate again as it leaves the viewport
          if (entry.isIntersecting && entry.boundingClientRect.y > 0) {
            console.log(entry.intersectionRatio)
            setDrawnPercent(entry.intersectionRatio)
          }
        });
    }
    let observer = new IntersectionObserver(intersectionCallback, options);

    const ref = useRef<HTMLInputElement>(null)

    React.useEffect(() => {
        if (ref.current) {
            console.log("observing..")
            observer.observe(ref.current)
        }
    }, [])
    
    return (
        <div ref={ref}>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                <path pathLength="1" strokeDasharray="1" strokeDashoffset={1-drawnPercent} d={path} stroke="white" strokeWidth="3"/>
            </svg>
        </div>
    );
}