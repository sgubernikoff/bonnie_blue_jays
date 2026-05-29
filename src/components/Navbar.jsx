import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/stats',    label: 'Stats & Roster' },
  { to: '/gallery',  label: 'Gallery' },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__wordmark">
          <span className="navbar__wordmark-main">Bonnie</span>
          <span className="navbar__wordmark-sub">Blue Jays</span>
        </NavLink>

        <ul className="navbar__links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger — wires up below */}
        <button className="navbar__burger" aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
