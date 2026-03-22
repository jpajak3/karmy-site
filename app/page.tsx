import Nav from '@/components/Nav'
import HeroVideo from '@/components/HeroVideo'
import ByTheNumbers from '@/components/ByTheNumbers'
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
        <ByTheNumbers />
        <WhatKarmyDoes />
        <ContentShowcase />
        <WorkWithKarmy />
        <ContactForm />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
