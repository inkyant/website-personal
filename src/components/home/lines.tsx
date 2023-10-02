
import Drawn from "@components/home/drawn";
import { projects } from "@pages";
import React from "react";
import { DrawingHandle } from "./drawn";

export default function Lines() {

    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)

    addEventListener("resize", () => {
        setScreenWidth(window.innerWidth)
    });

    // make refs: one for each project, and two more for start + end
    const refs = Array(projects.length + 2).fill('').map(() => React.useRef<DrawingHandle>(null))

    const lines = projects.map((project, index) => 
        <Drawn key={index} ref={refs[index+1]} drawingCallback={() => drawingCallback(index+1)} height="470" width="150" path={project.path}></Drawn>
    )
    
    function drawingCallback(id: number) {
        refs.forEach((ref, index) => {
            if (ref.current) {
                if (index < id) {
                    ref.current.setDrawn(1)
                } else if (index > id) {
                    ref.current.setDrawn(0)
                }
            }
        })
    }

    return (
        <div style={{position: 'absolute', left: '37px', width: "100%"}}>
            <Drawn ref={refs[0]} drawingCallback={() => drawingCallback(0)} height={250} width="100%" path={"M " + (screenWidth/2 - 45.85) + " 0 C " + (screenWidth/2 - 45.85) + " 300 50 50 13 250"}></Drawn>
            {lines}
            <Drawn ref={refs[refs.length-1]} drawingCallback={() => drawingCallback(refs.length-1)} height={483} width="100%" path="M 13 6 C 2 98 63 128 86 154.5 C 116 184 94 288 48 229 C 13 154 251 228 160 420"></Drawn>
        </div>
    )
}

