import Link from 'next/link'
// lib
import MenuItems from '../../lib/menu'
import useWindowSize from 'hooks/useResponsive'
// components
import MenuIcons from '../icons/menu'
import CloseIcons from '../icons/close'
import { useState } from 'react'

const NavigationWrapper = () => {
  const isMobile = useWindowSize()
  const [isMenuOpen, setMenuOpen] = useState(false)

  if (isMobile) {
    return (
      <nav id="navigation-mobile">
        <button onClick={() => setMenuOpen(!isMenuOpen)}>
          <MenuIcons style={{ color: 'white' }} />
        </button>
        {isMenuOpen && (
          <button onClick={() => setMenuOpen(false)} className="close-icon">
            <CloseIcons style={{ color: 'white' }} />
          </button>
        )}
        <ul className={`mobile-menu-${isMenuOpen ? 'active' : 'disable'}`}>
          {MenuItems.map(({ key, label }: { key: string; label: string }) => {
            return (
              <li key={key}>
                <Link href={key === 'login' ? '/api/auth/login' : key}>
                  <a>{label}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
  return (
    <nav id="navigation">
      {MenuItems.map(({ key, label }: { key: string; label: string }) => {
        return (
          <li key={key}>
            <Link href={key === 'login' ? '/api/auth/login' : key}>
              <a>{label}</a>
            </Link>
          </li>
        )
      })}
    </nav>
  )
}

export default NavigationWrapper
