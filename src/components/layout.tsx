
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
      {/* We have a wrapper div that scrolls instead of the body. This allows us to give it the perpective css property, which creates a parallax effect in iconsBackground.tsx */}
      <div id="scrollArea" style={{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100vh', overflowY: 'auto', overflowX: 'hidden', perspective: '10px'}}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
    </>
  )
}
