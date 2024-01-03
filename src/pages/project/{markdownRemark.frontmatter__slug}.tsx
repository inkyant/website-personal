import * as React from "react"
import { graphql } from "gatsby"
import { parseHtml } from "@pages"
import Layout from "@components/layout"
import * as styles from "@styles/pages/projectPage.module.scss";

export { Head } from "@pages/index"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  let [,,,longText] = parseHtml(html)
  return (
    <Layout>
      <h1 className={styles.title}>{frontmatter.title}</h1>
      <p className={styles.text}>
        {longText}
      </p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`