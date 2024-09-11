
import React from "react";

import Drawn from "@components/home/drawn";
import { DrawingHandle } from "./drawn";
import onVisible from "@components/common/visible";

import { fadeinAnim } from '@styles/components/home/projects.module.scss'
import { STROKE_WIDTH } from "@components/defines";
import { CIRCLE_LEFT_PX_NARROWSCREEN, CIRCLE_LEFT_PX_WIDESCREEN } from "@components/defines";


const ANGLE = Math.PI / 4
const RADIUS = 20 // radius, ie length, of the arrow at the end
const xArrow = RADIUS*Math.cos(ANGLE)
const yArrow = RADIUS*Math.sin(ANGLE)


// shuffle the lines! for fun! I didn't make them dynamic for no reason... surely...
const linePaths = shuffle([
    "M13 0.5C-30.5 285.5 94.5 281.5 13 470",
    "M13 0.5C12.8414 50.8751 -1.10819 139.319 11.5 204C33.991 319.38 94.7921 398.423 100.5 330.5C107.266 249.982 34.3602 289.008 6.50001 360.5C-12.9849 410.5 33.8799 434.784 13 470",
    "M13 0.5C3.28773 54.7716 38.6635 117.5 25.5 150.5C-46.5 331 79.409 315.61 13 470",
    "M13 0.5C-30.5 285.5 94.5 281.5 13 470",
])

// randomize array function, from stackoverflow, the Fisher-Yates algorithm
function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

export default function Lines() {

    const [screenWidth, setScreenWidth] = React.useState(600) //window.innerWidth doesn't always work
    
    // animation used for final line, it smoothly draws itself without scrolling
    const [animating, setAnimating] = React.useState(false)

    let isMobile = screenWidth < 600
    let circleLeftPx = isMobile ? CIRCLE_LEFT_PX_NARROWSCREEN : CIRCLE_LEFT_PX_WIDESCREEN
    
    // these are props all the Drawn components use
    let drawnProps = {width: 2 * screenWidth / 3, leftOffset: circleLeftPx}

    // make line refs: one for each project, and two more for start + end
    const refs = Array(linePaths.length + 2).fill('').map(() => React.useRef<DrawingHandle>(null))

    // map each path to an element that will draw the line
    const lines = linePaths.map((path, index) => 
        <Drawn key={index} ref={refs[index+1]} drawingCallback={() => drawingCallback(index+1)} height="470" path={path} {...drawnProps}></Drawn>
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

            // for mobile, last line has no special animation
            // dont use screenWidth, state is not updated at this point (could make ref to store)
            if ((scrollArea?.scrollWidth || 600) >= 600) {
                // last line has special animation when reached the bottom
                let isCloseToBottom = (margin: number) => scrollArea && Math.abs(scrollArea.scrollHeight - scrollArea.clientHeight - scrollArea.scrollTop) < margin
                
                if (isCloseToBottom(200)) {
                    let atBottom = isCloseToBottom(5)
                    if (atBottom != null) {
                        
                        // unset the line animation, unless at the bottom, then start it
                        refs[refs.length-1].current?.animDrawn(atBottom)

                        // draw in arrow after a timeout (cant detect when css animation finishes so just manually time)
                        setTimeout(() => {
                            let nowClose = isCloseToBottom(5)
                            if (nowClose != null) setAnimating(nowClose)
                        }, atBottom ? 750 : 0)
                    }
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

    // x position aligns with the .endLinksContainer in projects.scss
    const [xPos, yPos] = isMobile ? [100 + 40 - circleLeftPx, 400] : [420 - 30 - circleLeftPx, 225]

    const finalLineCallback = (percent: number) => {
        drawingCallback(refs.length-1)
        let scrollArea = document.querySelector("#scrollArea")
        if (scrollArea && scrollArea.scrollWidth < 600) {
            let isCloseToBottom = Math.abs(scrollArea.scrollHeight - scrollArea.clientHeight - scrollArea.scrollTop) < 5
            setAnimating(percent > 0.98 || isCloseToBottom)
        }
    }

    return (
        <div style={{position: 'absolute', width: "60%"}}>
            <Drawn ref={refs[0]} drawingCallback={() => drawingCallback(0)} height={250} path={"M " + (screenWidth/2 - circleLeftPx) + " 0 C " + (screenWidth/2 - circleLeftPx) + " 300 50 50 13 250"} {...drawnProps}></Drawn>
            
            {lines}
            
            <svg style={{position: "absolute", left: circleLeftPx, opacity: animating ? 1 : 0}} className={animating ? fadeinAnim : ''} height="483" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={
                    // manually draw arrow based on if pointing up or down with two lines
                    // move to x, y position, but to account for stroke width need to move line slightly along angle
                    "M "+(xPos+ (STROKE_WIDTH/2)*Math.cos(ANGLE))+" "+(yPos+(STROKE_WIDTH/2)*Math.sin(ANGLE))+
                    //create a line, up and to the left
                    " L "+(xPos - xArrow)+" "+(yPos - yArrow)+
                    // move back to position of arrow tip
                   " M "+xPos+" "+yPos+
                    // make second line, if this arrow is pointing right then line goes down and left. otherwise up and right.
                   " L "+(xPos + (xArrow*(isMobile ? 1 : -1)))+" "+(yPos + (yArrow*(isMobile ? -1 : 1)))} 
                   stroke="white" strokeWidth={STROKE_WIDTH}/>
            </svg>
            <Drawn ref={refs[refs.length-1]} drawingCallback={finalLineCallback} height={483} path={"M 13 6 C 2 98 63 128 86 154.5 C 116 184 94 288 48 229 C 13 154 "+(xPos-(isMobile ? 0 : 100))+" "+(yPos-(isMobile ? 200 : 0))+" "+xPos+" "+yPos}  {...drawnProps}></Drawn>
        </div>
    )
}

