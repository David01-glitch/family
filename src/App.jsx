import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Home from './pages/Home'
import About from './pages/About'
import Recipes from './pages/Recipes'
import Blog from './pages/Blog'
import Community from './pages/Community'
import Contact from './pages/Contact'
import Category from './pages/Category'
import { LegalPage, NotFound } from './pages/Legal'
import { trackPageView } from './utils/analytics'

export default function App() {
  const loc = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    trackPageView(loc.pathname)
  }, [loc.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/privacy" element={<LegalPage kind="privacy" />} />
          <Route path="/terms" element={<LegalPage kind="terms" />} />
          <Route path="/refund" element={<LegalPage kind="refund" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}
