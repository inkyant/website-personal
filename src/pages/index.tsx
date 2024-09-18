
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
      markdowns: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            title
          }
          html
          fileAbsolutePath
        }
      }
      yaml: allLayoutYaml {
        nodes {
          folder
          images {
            publicURL
          }
        }
      }
    }
  `)

  // Helper function to extract the folder name from the file path
  const getFolderName = (path: string): string => {
    const parts = path.split('/')
    return parts[parts.length - 2]
  }

  const projectSections = data.yaml.nodes.map(({ folder, images }) => {

    let markdown = data.markdowns.nodes.find(md => getFolderName(md.fileAbsolutePath) === folder)
    let imagePaths = images?.map(i => i.publicURL)

    if (!markdown) {
      console.error("Could not find markdown for folder: " + folder)
      return <></>
    }
    
    return <Project key={folder} title={markdown.frontmatter.title} textHtml={markdown.html} slug={markdown.frontmatter.slug} images={imagePaths}></Project>
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
