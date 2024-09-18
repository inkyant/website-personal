
import React from "react"

import type { HeadFC } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"

import End from '@components/home/end';
import Welcome from "@components/home/welcome";
import Project from "@components/home/project";
import Layout from "@components/layout";
import Lines from "@components/home/lines";
import IconsBackground from "@components/home/iconsBackground";
import { ImagePath, MarkdownData, QueryData } from "graphql-types";

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

interface FolderContent {
  markdown: MarkdownData
  images: ImagePath[]
}

export default function Home() {

  const data = useStaticQuery<QueryData>(graphql`
    query {
      imageOrMarkdown: allFile {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
          childMarkdownRemark {
            html
            frontmatter {
              slug
              title
            }
          }
          relativeDirectory
          extension
          publicURL
        }
      }
      yaml: allLayoutYaml {
        nodes {
          folder
        }
      }
    }
  `)

  const projectSections = data.yaml.nodes.map(({ folder }) => {

    let folderContents = data.imageOrMarkdown.nodes.filter((value) => value.relativeDirectory === folder)

    if (folderContents.length < 1) {
      console.error("Unable to find folder " + folder + " specfied in yaml.")
      return <></>
    }

    let markdown: MarkdownData | undefined;
    let images: (GatsbyImageData | string)[] = []

    folderContents.forEach((file) => {
      if (file.childMarkdownRemark) {
        markdown = file.childMarkdownRemark
      }
      else if (file.childImageSharp) {
        images.push(file.childImageSharp.gatsbyImageData)
      } else if (file.extension == "gif") {
        images.push(file.publicURL)
      }
    })

    if (!markdown) {
      console.error("Unable to find markdown in " + folder + " specfied in yaml.")
      return <></>
    }

    return <Project key={folder} title={markdown?.frontmatter.title} textHtml={markdown.html} slug={markdown.frontmatter.slug} images={images}></Project>
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
