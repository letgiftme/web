import Link from 'next/link'
// lib
import MenuItems from '../../lib/menu'
import useWindowSize from 'hooks/useResponsive';

const NavigationWrapper = () => {
  const isMobile = useWindowSize();

  if (isMobile) {
    return <nav id="navigation">
      
    </nav>
  }
  return (
    <nav id="navigation">
      {MenuItems.map(({ key, label }: { key: string; label: string }) => {
        return (
          <li key={key}>
            <Link href={key === "login" ? "/api/auth/login" : key}>
              <a>{label}</a>
            </Link>
          </li>
        )
      })}
    </nav>
  )
}

export default NavigationWrapper
