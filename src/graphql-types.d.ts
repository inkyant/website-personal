// src/types/graphql.d.ts

import { graphql } from 'gatsby'

// Define types for Markdown data
interface MarkdownData {
    frontmatter: {
        slug: string
        title: string
    }
    html: string
}

interface ImageOrMarkdownQueryData {
  imageOrMarkdown: {
    nodes: {
      childImageSharp: { gatsbyImageData: GatsbyImageData } | null
      childMarkdownRemark: MarkdownData | null
      relativeDirectory: string
      extension: string
      publicURL: string
    }[]
  }
}

interface YamlQueryData {
  yaml: {
    nodes: {
      folder: string
    }[]
  }
}

// Combine both types
export interface QueryData extends ImageOrMarkdownQueryData, YamlQueryData {}