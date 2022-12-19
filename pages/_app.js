import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Layout from '../components/layout/Layout'
import localFont from "@next/font/local";
import '../styles/globals.css'

const fontName = localFont({
  src: "../public/assets/fonts/roboto-v29-latin-regular.woff2",
})

export default function App({ Component, pageProps }) {
  return <Layout>
    <main className={fontName.className} >
      <Header />
      <Component {...pageProps} />
      <Footer />
  </main>
  </Layout>
}

