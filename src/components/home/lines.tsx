
import React from "react";

import Drawn from "@components/home/drawn";
import { DrawingHandle } from "./drawn";
import onVisible from "@components/common/visible";

import { fadeinAnim, fadeAnim } from '@styles/components/home/projects.module.scss'

const ANGLE = Math.PI / 4
const RADIUS = 20 // radius, ie length, of the arrow at the end
const xArrow = RADIUS*Math.cos(ANGLE)
const yArrow = RADIUS*Math.sin(ANGLE)

const linePaths = [
    "M13 0.5C-30.5 285.5 94.5 281.5 13 470",
    "M13 0.5C12.8414 50.8751 -1.10819 139.319 11.5 204C33.991 319.38 94.7921 398.423 100.5 330.5C107.266 249.982 34.3602 289.008 6.50001 360.5C-12.9849 410.5 33.8799 434.784 13 470",
    "M13 0.5C3.28773 54.7716 38.6635 117.5 25.5 150.5C-46.5 331 79.409 315.61 13 470",
    "M13 0.5C-30.5 285.5 94.5 281.5 13 470",
]


export default function Lines() {

    const [screenWidth, setScreenWidth] = React.useState(600) //window.innerWidth doesn't always work
    
    const [animating, setAnimating] = React.useState(false)
    const arrowRef = React.useRef<SVGSVGElement>(null)

    let isArrowPointDown = screenWidth < 600

    // make line refs: one for each project, and two more for start + end
    const refs = Array(linePaths.length + 2).fill('').map(() => React.useRef<DrawingHandle>(null))

    const lines = linePaths.map((path, index) => 
        <Drawn key={index} ref={refs[index+1]} drawingCallback={() => drawingCallback(index+1)} height="470" width="150" path={path}></Drawn>
    )

    // set up animation for first line and last line
    React.useEffect(() => {
        let scrollArea = document.querySelector("#scrollArea")

        // first line has to start in middle of screen
        let onResize = () => {
            if (scrollArea) setScreenWidth(scrollArea.clientWidth)
        }
        onResize() // call because could not set in SSR

        let onScroll = () => {
            // if scroll to top, IntersectionObserver does not always catch, so undraw all
            if (scrollArea?.scrollTop === 0) {drawingCallback(-1)}

            // last line has special animation when reacted the bottom
            let isCloseToBottom = (margin: number) => scrollArea && Math.abs(scrollArea.scrollHeight - scrollArea.clientHeight - scrollArea.scrollTop) < margin
            if (isCloseToBottom(200)) {
                let close = isCloseToBottom(1)
                if (close != null) {
                    refs[refs.length-1].current?.animDrawn(close)
                    setTimeout(() => {
                        let nowClose = isCloseToBottom(1)
                        nowClose != null && setAnimating(nowClose)
                    }, (close && !isArrowPointDown) ? 750 : 0)
                }
            }
        }
        addEventListener("resize", onResize);
        scrollArea?.addEventListener("scroll", onScroll);
    
        return () => {removeEventListener("resize", onResize); scrollArea?.removeEventListener("scroll", onScroll)};
    }, []);
    
    function drawingCallback(id: number) {
        refs.forEach((ref, index) => {
            if (index < id) {
                ref.current?.setDrawn(1)
            } else if (index > id) {
                ref.current?.setDrawn(0)
            }
        })
    }

    const [xPos, yPos] = isArrowPointDown ? [100, 400] : [300, 225]

    return (
        <div style={{position: 'absolute', left: '37px', width: "60%"}}>
            <Drawn ref={refs[0]} drawingCallback={() => drawingCallback(0)} height={250} width="100%" path={"M " + (screenWidth/2 - 37) + " 0 C " + (screenWidth/2 - 37) + " 300 50 50 13 250"}></Drawn>
            {lines}
            <svg ref={arrowRef} className={animating ? fadeinAnim : fadeAnim} style={{position: "absolute", opacity: animating ? 1 : 0}} height="483" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={"M "+(xPos+1)+" "+(yPos+1)+" L "+(xPos - xArrow)+" "+(yPos - yArrow)+" M "+xPos+" "+yPos+" L "+(xPos + (xArrow*(isArrowPointDown ? 1 : -1)))+" "+(yPos + (yArrow*(isArrowPointDown ? -1 : 1)))} stroke="white" strokeWidth="3"/>
            </svg>
            <Drawn ref={refs[refs.length-1]} drawingCallback={() => drawingCallback(refs.length-1)} height={483} width="100%" path={"M 13 6 C 2 98 63 128 86 154.5 C 116 184 94 288 48 229 C 13 154 "+(xPos-(isArrowPointDown ? 0 : 100))+" "+(yPos-(isArrowPointDown ? 200 : 0))+" "+xPos+" "+yPos}></Drawn>
        </div>
    )
}

