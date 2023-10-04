
import React, { useRef } from "react";

import { drawAnim } from '@styles/components/home/projects.module.scss'

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

// typescript fun
export type DrawingHandle = {
    setDrawn: (percent: number) => void;
    animDrawn: (enable: boolean) => void;
};


export default React.forwardRef<DrawingHandle, { path: string, height: number, width: string, drawingCallback?: Function }>(function Drawn({path, height, width, drawingCallback}, ref) {
    
    const [drawnPercent, setDrawnPercent] = React.useState(0)
    const [isEndAnim, setIsEndAnim] = React.useState(false)

    const drawnRef = useRef<SVGSVGElement>(null)

    React.useEffect(() => {
        let intersectionCallback: IntersectionObserverCallback = (entries, observer) => {
            entries.forEach((entry) => {
              // check if visible, and if is below viewport. or it will animate again as it leaves the viewport
              if (entry.isIntersecting && entry.boundingClientRect.y > 0) {
                setDrawnPercent(entry.intersectionRatio)
                if (drawingCallback) {
                    drawingCallback()
                }
              }
            });
        }
        let observer = new IntersectionObserver(intersectionCallback, options);

        if (drawnRef && drawnRef.current) {
            observer.observe(drawnRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const inputRef = useRef<SVGPathElement>(null);

    React.useImperativeHandle(ref, () => {
        return {
            setDrawn(percent: number) {
                if (inputRef.current) {
                    inputRef.current.style.strokeDashoffset = ""+(1-percent)
                }
            },
            animDrawn(enable: boolean) {
                setIsEndAnim(enable)
            }
        };
    }, []);
    
    return (
        <div>
            <svg ref={drawnRef} height={height} width={width} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={inputRef} className={isEndAnim ? drawAnim : ''} pathLength="1" strokeDasharray="1" style={{strokeDashoffset: 1-drawnPercent}} d={path} stroke="white" strokeWidth="3"/>
            </svg>
        </div>
    );
});