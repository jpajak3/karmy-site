import Nav from '@/components/Nav'
import HeroVideo from '@/components/HeroVideo'
import QuickLinks from '@/components/QuickLinks'
import ByTheNumbers from '@/components/ByTheNumbers'
import Partners from '@/components/Partners'
import WhatKarmyDoes from '@/components/WhatKarmyDoes'
import ContentShowcase from '@/components/ContentShowcase'
import WorkWithKarmy from '@/components/WorkWithKarmy'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroVideo />
        <QuickLinks />
        <ByTheNumbers />
        <Partners />
        <WhatKarmyDoes />
        <ContentShowcase />
        <WorkWithKarmy id="work" />
        <ContactForm />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
