// src/types/graphql.d.ts

import { graphql } from 'gatsby'

// Define types for Markdown data
interface MarkdownData {
    frontmatter: {
        slug: string
        title: string
        priority: number
    }
    fileAbsolutePath: string
    html: string
}

interface MarkdownQueryData {
  markdowns: {
    edges: {node: MarkdownData}[]
  }
}

// Define types for Image data
interface ImagePath {
    relativePath: string
    publicURL: string
    absolutePath: string
}

interface ImageQueryData {
  images: {
    edges: { node: ImagePath }[]
  }
}

// Combine both types
export interface QueryData extends MarkdownQueryData, ImageQueryData {}