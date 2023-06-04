import NavigationWrapper from '../../../components/navigation'
import Logo from '../../../components/logo'
import { HeaderHero } from 'components/heros'

const Header = () => {
  return (
    <header id="header">
      <div id="header">
        <div className="container">
          <div className="header">
            <Logo />
            <NavigationWrapper />
          </div>
          <HeaderHero />
        </div>
      </div>
    </header>
  )
}
export default Header
