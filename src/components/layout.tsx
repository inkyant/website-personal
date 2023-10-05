
import React from "react"

import Header from "./common/header"
import Footer from "./common/footer"


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div id="scrollArea" style={{position: 'relative', height: '100vh', overflowY: 'auto', overflowX: 'hidden', perspective: '10px'}}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
    </>
  )
}
