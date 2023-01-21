import { ActiveLink } from '../ActiveLink'

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  }
]

export const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <strong>Next.js</strong>
        </li>
      </ul>
      <ul>
        {menuItems.map(({ href, text }) => (
          <ActiveLink key={href} href={href} text={text} />
        ))}
      </ul>
    </nav>
  </header>
)
