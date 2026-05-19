import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'

const sharedSections = {
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'How we collect, use, and protect your information.',
    body: [
      ['Information we collect', 'We collect information you provide directly — such as your name and email when you subscribe to our newsletter or contact us — and automatic information like browser type, pages visited, and time spent on the site through Google Analytics.'],
      ['How we use information', 'To send our weekly newsletter, respond to your messages, improve the site, and understand which recipes you love most. We never sell your data.'],
      ['Cookies', 'We use cookies to remember your preferences and analyze traffic. You can disable cookies in your browser settings without losing access to the site.'],
      ['Third-party services', 'We use Google Analytics for traffic analysis. They have their own privacy policies governing the use of that information.'],
      ['Your rights', 'You can request access to, correction of, or deletion of your data at any time by emailing familyrecipelegacy@gmail.com.'],
      ['Contact', 'Questions? Reach us at familyrecipelegacy@gmail.com or (225) 555-3771.']
    ]
  },
  terms: {
    title: 'Terms & Conditions',
    subtitle: 'The basic rules of using Family Recipe Legacy.',
    body: [
      ['Use of content', 'Recipes and stories on this site are for personal, non-commercial use. You may share a recipe with a friend; please don\'t republish our content without written permission.'],
      ['Accuracy', 'We do our best to test every recipe but cannot guarantee outcomes — ovens vary, ingredients vary, and cooking is part craft, part art.'],
      ['User content', 'When you submit a recipe or comment, you grant us permission to publish it with credit to you.'],
      ['Disclaimer', 'The site is provided as-is. We are not responsible for any kitchen mishaps, dietary reactions, or burnt biscuits.'],
      ['Changes', 'We may update these terms occasionally. Continued use of the site means you accept any updates.'],
      ['Contact', 'familyrecipelegacy@gmail.com · (225) 555-3771']
    ]
  },
  refund: {
    title: 'Refund Policy',
    subtitle: 'For our paid products (cookbooks, classes, etc.).',
    body: [
      ['Digital products', 'Digital cookbooks and printable recipe cards are non-refundable once downloaded. If a file is corrupted or won\'t open, contact us within 7 days and we will replace it.'],
      ['Cooking classes', 'Live online classes are refundable up to 48 hours before the scheduled time. After that, we offer credit toward a future class.'],
      ['Physical merchandise', 'Aprons, tea towels and printed cookbooks may be returned within 30 days of delivery in their original condition for a full refund. Buyer covers return shipping.'],
      ['How to request a refund', 'Email familyrecipelegacy@gmail.com with your order number and reason. Refunds are processed within 5-7 business days.'],
      ['Contact', 'familyrecipelegacy@gmail.com · 921 Magnolia Street, Baton Rouge, LA 70802']
    ]
  }
}

export function LegalPage({ kind }) {
  const data = sharedSections[kind]
  return (
    <>
      <PageHeader title={data.title} subtitle={data.subtitle} />
      <section className="section">
        <div className="container-x max-w-3xl">
          <div className="space-y-7">
            {data.body.map(([h, p]) => (
              <div key={h}>
                <h2 className="font-heading text-2xl text-brown-dark">{h}</h2>
                <p className="text-brown/80 leading-relaxed mt-2">{p}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-brown/60 mt-10">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>
    </>
  )
}

export function NotFound() {
  return (
    <section className="section">
      <div className="container-x text-center py-20">
        <h1 className="font-heading text-7xl text-vintage">404</h1>
        <h2 className="heading mt-2">This recipe got lost in the pantry</h2>
        <p className="subheading mt-3 mx-auto">The page you're looking for doesn't exist — but the kitchen is still open.</p>
        <Link to="/" className="btn btn-primary mt-6">Back to home</Link>
      </div>
    </section>
  )
}
