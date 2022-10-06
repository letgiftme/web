import { HeaderHero, ActionHero, AboutHero } from './index'

export default {
  title: 'Components/Heros'
}

export const Header = () => (
  <div style={{ background: 'black', padding: 30 }}>
    <HeaderHero />
  </div>
)

export const Action = () => <ActionHero />

export const About = () => <AboutHero />
