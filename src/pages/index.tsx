
import React from "react"

import type { HeadFC } from "gatsby"

import End from '@components/home/end';
import Welcome from "@components/home/welcome";
import Project from "@components/home/project";
import Layout from "@components/layout";
import Lines from "@components/home/lines";
import IconsBackground from "@components/home/iconsBackground";

export const projects = [
  {title: "Robotics",   
    text: `I was the programming director for FRC team 972 Iron Claw Robotics, and with my contributions our team led the 
    top 8 alliance in the world. Along with with my work developing the software, I implemented industy standard code processes 
    to help more people contribute to the team by creating a tasklist and creating PR procedures with unit tests and code reviews. 
    I also created a curriculum to teach new students various aspects of robotics, from electronics to control theory to 
    autonomous movement. I was also a part of the Curriculum Council making decisions on how to manage the 50 student team.`, 
    path: "M13 0.5C-30.5 285.5 94.5 281.5 13 470"},
  {title: "Website",  
    text: `I created this website using React. I also created a version using Hugo (very close to plain js/html/css). Right now, this 
    website is still under development but I have implemented many complicated UI features without the use of any add on React libraries. 
    Though using libraries would make development quicker and easier, it allowed me to better learn and demonstrate the skills needed 
    for React development.`,
    path: "M13 0.5C12.8414 50.8751 -1.10819 139.319 11.5 204C33.991 319.38 94.7921 398.423 100.5 330.5C107.266 249.982 34.3602 289.008 6.50001 360.5C-12.9849 410.5 33.8799 434.784 13 470"},
  {title: "Game Design",   
    text: `I created and published modifications for the history game Civilization, which garnered over 5000 downloads. This involved 
    creating lua scripts, using the  SQL database, and modifying the source DLL in C++. I had to consider aspects of game design and did
    research into the history through books and articles. I also learned art asset creation techniques, like Photoshop and Blender.`,
    path: "M13 0.5C3.28773 54.7716 38.6635 117.5 25.5 150.5C-46.5 331 79.409 315.61 13 470"},
  {title: "AI",   
    text: `With a friend we recreated the popular game Super Auto Pets in python. I then created a Deep Q Reinforcement Learning algortihm
    using pytorch to try to beat the game. While this project is still in progress, it has successfully beat teams that grow exponentially
    stronger with level. I hope to improve the simulation and tune the AI to create a better model.`,
    path: "M13 0.5C-30.5 285.5 94.5 281.5 13 470"},
]

// configure the settings for animation
// precision is the % step at which we animate, for example 0.01 draws 1% of the line for every 1% scrolled
const PRECISION = 0.01
// the pixels above the bottom of the viewport at which the line is "drawn" (just for the percent intersection, the line can go up)
export const ANIM_MARGIN = 300
// options is used by IntersectionObserver, see the docs. We configure it to callback every precision% and 
// only call back at ANIM_MARGIN px above the bottom of the viewport
export const lineAnimOptions = () => {return {
    threshold: Array.from({length: (1 / PRECISION) + 1}, (value, index) => index*PRECISION),
    rootMargin: "0px 0px -" + ANIM_MARGIN + "px 0px",
    root: document.querySelector("#scrollArea"),
}}

export const animOptions = () => {return {
  rootMargin: "0px 0px -" + ANIM_MARGIN + "px 0px",
  root: document.querySelector("#scrollArea"),
}}


export default function Home() {

  const projectSections = projects.map((project, index) =>
    <Project key={index} title={project.title} text={project.text}></Project>
  )

  return (
    <Layout>
      <IconsBackground/>
      <Welcome></Welcome>

      <div>
        <Lines></Lines>

        <div style={{paddingTop: "250px"}}>
          {projectSections}
        </div>

        <End></End>
      </div>
    </Layout>
  )
}

export const Head: HeadFC = () => 
<>        
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
  <title>Anthony Furman</title>
</>
