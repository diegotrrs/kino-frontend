import '../styles/globals.scss'

import React, { useEffect } from "react"
import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"



const Kino = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient())

  console.log('>>>>>>>>> _APP')

  useEffect(() => {
    // TODO Find out why still the lyrics don't make exactly as in the mosaic example
    // in the index.html file they add this class to the body  <body class="font-inter antialiased bg-indigo-100 text-slate-600"> 
    // if i removed the line below, the the class in the body then both apps look the same (with a minimal ex)
    document.body.className = 'font-inter antialiased bg-indigo-50 text-slate-600'
    // TODO Use Next/Head to set up this. I tried using it but I got an error. 
    document.title = "Kino Calendars"
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default Kino
