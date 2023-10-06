
import Drawn from "@components/home/drawn";
import { projects } from "@pages";
import React from "react";
import { DrawingHandle } from "./drawn";
import onVisible from "@components/common/visible";

import { fadeinAnim, fadeAnim } from '@styles/components/home/projects.module.scss'

const ANGLE = Math.PI / 4
const RADIUS = 20 // radius, ie length, of the arrow at the end
const xArrow = RADIUS*Math.cos(ANGLE)
const yArrow = RADIUS*Math.sin(ANGLE)

export default function Lines() {

    const [screenWidth, setScreenWidth] = React.useState(600) //window.innerWidth doesn't always work
    
    const [animating, setAnimating] = React.useState(false)
    const arrowRef = React.useRef<SVGSVGElement>(null)

    let isArrowPointDown = screenWidth < 600

    // make line refs: one for each project, and two more for start + end
    const refs = Array(projects.length + 2).fill('').map(() => React.useRef<DrawingHandle>(null))

    const lines = projects.map((project, index) => 
        <Drawn key={index} ref={refs[index+1]} drawingCallback={() => drawingCallback(index+1)} height="470" width="150" path={project.path}></Drawn>
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
                if (close != null) refs[refs.length-1].current?.animDrawn(close)
            }
        }
        addEventListener("resize", onResize);
        scrollArea?.addEventListener("scroll", onScroll);
    
        return () => {removeEventListener("resize", onResize); scrollArea?.removeEventListener("scroll", onScroll)};
    }, []);

    React.useEffect(() => {
        // when they are visible, animate them in
        return onVisible([arrowRef.current], {rootMargin: "0px 0px -65px 0px", threshold: 1, root: document.querySelector("#scrollArea"),},
            (entry: IntersectionObserverEntry) => {
            setTimeout(() => {
                setAnimating(entry.isIntersecting);
            }, (entry.isIntersecting && !isArrowPointDown) ? 750 : 0); }
        )
    }, [])
    
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

