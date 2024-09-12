
import React from "react"

import type { HeadFC } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"

import End from '@components/home/end';
import Welcome from "@components/home/welcome";
import Project from "@components/home/project";
import Layout from "@components/layout";
import Lines from "@components/home/lines";
import IconsBackground from "@components/home/iconsBackground";

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
