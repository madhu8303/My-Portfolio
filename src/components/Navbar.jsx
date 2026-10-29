import { useState } from 'react';
import { ArrowDownToLine, Menu, X } from 'lucide-react';
import { profile } from '../data/profile.js';

const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['achievements', 'Achievements'],
  ['contact', 'Contact'],
];

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar page-shell" aria-label="Main navigation">
        <a className="brand-mark" href="#home" aria-label="Madhusudhan R, home" onClick={() => setMenuOpen(false)}>
          MR<span>.</span>
        </a>
        <button
          className="menu-toggle icon-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div id="primary-navigation" className={`nav-content${menuOpen ? ' is-open' : ''}`}>
          <ul className="nav-links">
            {navItems.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? 'is-active' : ''}
                  aria-current={activeSection === id ? 'location' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a className="button button-small button-outline resume-nav" href={profile.links.resume} download>
            <ArrowDownToLine size={15} aria-hidden="true" />
            Download Resume
          </a>
        </div>
      </nav>
    </header>
  );
}