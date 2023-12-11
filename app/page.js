import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Hero />
      <Contact />
      <Faq />
      <Footer />
      
    </main>
  )
}
