import * as React from "react"
import { Link, PageProps } from "gatsby"
import Layout from "@components/layout"

import { main } from "@styles/pages/404.module.scss"

export { Head } from "@pages/index"

export default function NotFoundPage() {
  return (
    <Layout>
      <div className={main}>
          <p>Sorry 😔, we couldn't find what you were looking for.</p>
          <br />
          <Link to="/">Click to go home</Link>.
      </div>
    </Layout>
  )
}