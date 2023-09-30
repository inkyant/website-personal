import * as React from "react"
import type { HeadFC } from "gatsby"

import End from '@components/home/end';
import Welcome from "@components/home/welcome";
import Project from "@components/home/project";
import Layout from "@components/layout";

export default function Home() {
  return (
    <Layout>
      <Welcome></Welcome>
      <Project title='test' text='lorem ipsum dolor sit amet anoewuniuren iwniure niurn ijwdnf' lineType={1}></Project>
      <Project title='test' text='lorem ipsum dolor sit amet anoewuniuren iwniure niurn ijwdnf' lineType={2}></Project>
      <End></End>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>Anthony Furman</title>
