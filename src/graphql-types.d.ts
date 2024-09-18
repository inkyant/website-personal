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

interface ImageQueryData {
  image: {
    nodes: {
      childImageSharp: { gatsbyImageData: GatsbyImageData }
      relativeDirectory: string
    }[]
  }
}

interface MarkdownQueryData {
  markdown: {
    nodes: {
      childMarkdownRemark: MarkdownData
      relativeDirectory: string
    }[]
  }
}

interface GifQueryData {
  gif: {
    nodes: {
      relativeDirectory: string
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
export interface QueryData extends ImageQueryData, MarkdownQueryData, GifQueryData, YamlQueryData {}