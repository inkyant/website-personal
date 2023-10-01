
import Drawn from "@components/home/drawn";
import { projects } from "@pages";
import React from "react";
import { DrawingHandle } from "./drawn";

export default function Lines() {

    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)

    addEventListener("resize", () => {
        setScreenWidth(window.innerWidth)
    });

    const refs = projects.map(() => React.useRef<DrawingHandle>(null))

    const lines = projects.map((project, index) => 
        <Drawn key={index} ref={refs[index]} drawingCallback={() => drawingCallback(index)} height="470" width="150" path={project.path}></Drawn>
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
            <Drawn height={250} width="100%" path={"M " + (screenWidth/2 - 45.85) + " 0 C " + (screenWidth/2 - 45.85) + " 300 50 50 13 250"}></Drawn>
            {lines}
            <Drawn height={483} width="100%" path="M 13 6 C 2 98 63 128 86 154.5 C 116 184 94 288 48 229 C 13 154 251 228 160 420"></Drawn>
        </div>
    )
}

