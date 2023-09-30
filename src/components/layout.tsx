
import React from "react"

import Header from "./common/header"
import Footer from "./common/footer"


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content= "width=device-width, initial-scale=1.0" />
        <title>Anthony Furman</title>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        
      </head>
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
