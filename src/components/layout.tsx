
import React from "react"

import Header from "./common/header"
import Footer from "./common/footer"


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}
