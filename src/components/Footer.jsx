import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brown-dark text-cream/90 mt-16">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-9 h-9 rounded-full bg-vintage grid place-items-center font-heading font-bold">F</span>
            <span className="font-heading text-lg font-semibold text-cream">Family Recipe Legacy</span>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed">Traditional American recipes, baking tips, and kitchen memories passed down through generations.</p>
        </div>
        <div>
          <h4 className="font-heading text-cream text-lg mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/recipes" className="hover:text-gold">Recipes</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Blog</Link></li>
            <li><Link to="/community" className="hover:text-gold">Community</Link></li>
            <li><Link to="/category/grandmas-recipes" className="hover:text-gold">Grandma's Recipes</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-cream text-lg mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-gold">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-gold">Terms</Link></li>
            <li><Link to="/refund" className="hover:text-gold">Refund</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-cream text-lg mb-3">Visit Us</h4>
          <address className="not-italic text-sm text-cream/80 leading-relaxed">
            921 Magnolia Street<br />Baton Rouge, LA 70802, USA<br />
            <a href="mailto:familyrecipelegacy@gmail.com" className="hover:text-gold">familyrecipelegacy@gmail.com</a><br />
            <a href="tel:+12255553771" className="hover:text-gold">(225) 555-3771</a>
          </address>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-x py-5 text-xs text-cream/60 flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Family Recipe Legacy. All rights reserved.</span>
          <span>Made with love in Baton Rouge, LA.</span>
        </div>
      </div>
    </footer>
  )
}
