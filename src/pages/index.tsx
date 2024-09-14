
import React from "react"

import type { HeadFC } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"

import End from '@components/home/end';
import Welcome from "@components/home/welcome";
import Project from "@components/home/project";
import Layout from "@components/layout";
import Lines from "@components/home/lines";
import IconsBackground from "@components/home/iconsBackground";
import { ImageData, MarkdownData, QueryData } from "graphql-types";

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
  images: ImageData[]
}

export default function Home() {

  const data = useStaticQuery<QueryData>(graphql`
    query {
      markdowns: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              title
            }
            html
            fileAbsolutePath
          }
        }
      }
      images: allFile(filter: { extension: { in: ["png", "jpg", "jpeg", "gif"] } }) {
        edges {
          node {
            relativePath
            publicURL
            absolutePath
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

  // Process the data
  const markdownFiles = data.markdowns.edges.map(edge => edge.node)
  const imageFiles = data.images.edges

  // Group images and markdown by folder
  const folderContents: { [key: string]: FolderContent } = {}

  markdownFiles.forEach(markdown => {
    const folderName = getFolderName(markdown.fileAbsolutePath)
    folderContents[folderName] = { markdown: markdown, images: [] }
  })

  imageFiles.forEach(({ node }) => {
    const folderName = getFolderName(node.absolutePath)
    if (folderContents[folderName]) {
      folderContents[folderName].images.push(node)
    }
  })

  const projectSections = Object.keys(folderContents).map(folderName => {
    const { markdown, images } = folderContents[folderName]
    console.log(markdown, images)
    return <Project key={folderName} title={markdown?.frontmatter.title} textHtml={markdown.html} slug={markdown.frontmatter.slug} images={images}></Project>
  })

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
