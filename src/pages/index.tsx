
import React from "react"

import type { HeadFC } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"

import End from '@components/home/end';
import Welcome from "@components/home/welcome";
import Project from "@components/home/project";
import Layout from "@components/layout";
import Lines from "@components/home/lines";
import IconsBackground from "@components/home/iconsBackground";

// configure the settings for animation
// precision is the % step at which we animate, for example 0.01 draws 1% of the line for every 1% scrolled
const PRECISION = 0.01
// the percentage of screen height above the bottom of the viewport at which the line is "drawn" (just for the percent intersection, the line can go up)
export const ANIM_MARGIN_RATIO = 1/3
// options is used by IntersectionObserver, see the docs. We configure it to callback every precision% and 
// only call back at ANIM_MARGIN_RATIO*screenheight px above the bottom of the viewport
export const animOptions = () => {
  let scrollArea = document.querySelector("#scrollArea")
  let height = scrollArea ? scrollArea.clientHeight : 900
  return {
    rootMargin: "500px 0px -" + height*ANIM_MARGIN_RATIO + "px 0px",
    root: scrollArea,
  }
}

export const lineAnimOptions = () => {return {
    threshold: Array.from({length: (1 / PRECISION) + 1}, (value, index) => index*PRECISION),
    ...animOptions(),
}}

// this is how the markdown should be formatted. 
export const parseHtml = (html: string) => {

  // split by each element, i.e. by line
  return html.split('\n').map((t, i) => t
    // remove beginning and ending <p> or <h1> tag
    .replace(/<..{0,3}>(.*)<..{0,3}>/, '$1')
    // replace <strong> with colored text. Have to hard code color set in variables.scss
    .replace(/<strong>/g, '<span style="color: #11da86">')
    .replace(/<\/strong>/g, "</span>")
  )
}

export default function Home() {

  // just typescript things...
  // ideally there would be a way to avoid having to write the schema twice like this, but I couldn't find one...
  const { allFile: { nodes: data } } = useStaticQuery<
  { allFile: 
    { nodes: [{
      childrenMarkdownRemark: [{
        frontmatter: {slug: string, title: string}, 
        html: string
      }]
    }]
  }}>
  (graphql`{
    allFile {
      nodes {
        childrenMarkdownRemark {
          frontmatter {
            slug
            title
          }
          html
        }
      }
    } 
  }
  `)

  const projectSections = data.map(({childrenMarkdownRemark: [project]}, index) =>
    <Project key={index} title={project.frontmatter.title} textHtml={project.html} slug={project.frontmatter.slug}></Project>
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
