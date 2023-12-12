import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import Camp from './components/Camp/Camp'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <Camp/>
      <Faq />
      <Contact />
      <Footer />
      
    </main>
  )
}
