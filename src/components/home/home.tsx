
import React from "react"

import End from '@components/home/end';
import Welcome from "@components/home/welcome";
import Project from "@components/home/project";
import Layout from "@components/layout";
import Lines from "@components/home/lines";
import IconsBackground from "@components/home/iconsBackground";
import type { ProjectData } from "../../projects";

export default function Home({ projects }: { projects: ProjectData[] }) {

  const projectSections = projects.map(({ folder, title, html, slug, images }) =>
    <Project key={folder} title={title} textHtml={html} slug={slug} images={images}></Project>
  )

  return (
    <Layout>
      <IconsBackground sections={projects.length} />
      <Welcome></Welcome>

      <div style={{position: "relative"}}>
        <Lines count={projects.length}></Lines>

        <div style={{paddingTop: "250px"}}>
          {projectSections}
        </div>

        <End></End>
      </div>
    </Layout>
  )
}
