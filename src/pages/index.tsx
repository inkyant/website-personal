
import React from "react"

import type { HeadFC } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"

import End from '@components/home/end';
import Welcome from "@components/home/welcome";
import Project from "@components/home/project";
import Layout from "@components/layout";
import Lines from "@components/home/lines";
import IconsBackground from "@components/home/iconsBackground";
import { QueryData } from "graphql-types";

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

  const data = useStaticQuery<QueryData>(graphql`
    query {
      markdown: allFile(filter: {extension: {eq: "md"}}) {
        nodes {
          childMarkdownRemark {
            html
            frontmatter {
              slug
              title
            }
          }
          relativeDirectory
        }
      }
      yaml: allLayoutYaml {
        nodes {
          folder
          images {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  const projectSections = data.yaml.nodes.map(({ folder, images }) => {

    const markdown = data.markdown.nodes.find(markdown => markdown.relativeDirectory === folder)?.childMarkdownRemark

    if (!markdown) {
      console.error("Unable to find markdown in " + folder + " specfied in yaml.")
      return <></>
    }

    return <Project key={folder} title={markdown?.frontmatter.title} textHtml={markdown.html} slug={markdown.frontmatter.slug} images={images?.map(i=>i.childImageSharp.gatsbyImageData)}></Project>
  })

  return (
    <Layout>
      <IconsBackground />
      <Welcome></Welcome>

      <div>
        <Lines count={data.yaml.nodes.length}></Lines>

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
