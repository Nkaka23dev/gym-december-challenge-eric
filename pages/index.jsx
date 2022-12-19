import Header from "../components/layout/Header";
import News from "../components/sections/News";
import Head from 'next/head'
import CTA from "../components/sections/CTA";
import Discover from "../components/sections/Discover";

export default function Home() {
  return (
  <>
<Head>
  <title>TUM</title>
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
</Head>
 <Header/>
 <News/>
 <Discover/>
 <CTA/>
 
  </>
  )
} 