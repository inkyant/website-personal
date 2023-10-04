
import React, { useRef } from "react";

import { drawAnim } from '@styles/components/home/projects.module.scss'
import { lineAnimOptions } from "@pages";
import onVisible from "@components/common/visible";

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
        let draw = (entry: IntersectionObserverEntry) => {
            // if the line is visible, draw it! Must be below the screen or will animate as it leaves at the top of screen
            if (entry.isIntersecting && entry.boundingClientRect.y > 0) {
                setDrawnPercent(entry.intersectionRatio)
                if (drawingCallback) drawingCallback()
            }
        }

        // function to run callback when comes on screen (configured with 'options')
        return onVisible([drawnRef.current], lineAnimOptions, draw)
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