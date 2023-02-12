import './globals.css'
import '../styles/globals.scss'
//import React, { useEffect } from 'react'
import { QueryClient } from 'react-query'

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  // const [queryClient] = React.useState(() => new QueryClient())

  // useEffect(() => {
  //   // TODO Find out why still the lyrics don't make exactly as in the mosaic example
  //   // in the index.html file they add this class to the body  <body class="font-inter antialiased bg-indigo-100 text-slate-600"> 
  //   // if i removed the line below, the the class in the body then both apps look the same (with a minimal ex)
  //   document.body.className = 'font-inter antialiased bg-indigo-50 text-slate-600'
  //   // TODO Use Next/Head to set up this. I tried using it but I got an error. 
  //   document.title = "Kino Calendars xx"
  // }, [])


  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
