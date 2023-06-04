import type { NextPage } from 'next'
import { HowWorks, Footer, Header, SEO } from 'components'
import { AboutHero, ActionHero } from 'components/heros'

const Home: NextPage = () => {
  return (
    <main>
      <SEO title="letgift.me" />
      <Header />
      <AboutHero />
      <HowWorks />
      <ActionHero />
      <Footer />
    </main>
  )
}

export default Home
