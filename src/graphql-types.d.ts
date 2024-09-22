// src/types/graphql.d.ts

import { graphql } from 'gatsby'

// Define types for Markdown data
interface MarkdownData {
    frontmatter: {
        slug: string
        title: string
    }
    fileAbsolutePath: string
    html: string
}

interface MarkdownQueryData {
  markdowns: {
    nodes: MarkdownData[]
  }
}

interface YamlQueryData {
  yaml: {
    nodes: {
      folder: string
      images: {
        publicURL: string
      }[] | null
    }[]
  }
}

// Combine both types
export interface QueryData extends MarkdownQueryData, YamlQueryData {}