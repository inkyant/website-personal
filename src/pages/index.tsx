import * as React from "react"
import type { HeadFC } from "gatsby"

import End from '@components/home/end';
import Welcome from "@components/home/welcome";
import Project from "@components/home/project";
import Layout from "@components/layout";
import Lines from "@components/home/lines";

export const projects = [
  {title: "test",   text: 'lorem ipsum dolor sit amet anoewuniuren iwniure niurn ijwdnf', path: "M13 0.5C-30.5 285.5 94.5 281.5 13 468.5"},
  {title: "yeeee",  text: 'lorem ipsum dolor sit amet anoewuniuren iwniure niurn ijwdnf', path: "M13 0.5C12.8414 50.8751 -1.10819 139.319 11.5 204C33.991 319.38 94.7921 398.423 100.5 330.5C107.266 249.982 34.3602 289.008 6.50001 360.5C-12.9849 410.5 33.8799 434.784 13 465.5"},
  {title: "mann",   text: 'lorem ipsum dolor sit amet anoewuniuren iwniure niurn ijwdnf', path: "M13 0.5C3.28773 54.7716 38.6635 117.5 25.5 150.5C-46.5 331 79.409 315.61 13 467"}
]

export default function Home() {

  const projectSections = projects.map((project, index) =>
    <Project key={index} title={project.title} text={project.text}></Project>
  )

  return (
    <Layout>
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
