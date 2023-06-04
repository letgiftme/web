import Link from 'next/link'
// lib
import MenuItems from '../../lib/menu'

const NavigationWrapper = () => {
  return (
    <nav id="navigation">
      {MenuItems.map(({ key, label }: { key: string; label: string }) => {
        return (
          <li key={key}>
            <Link href={key}>
              <a>{label}</a>
            </Link>
          </li>
        )
      })}
    </nav>
  )
}

export default NavigationWrapper
