import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile.js';
import SocialLinks from './SocialLinks.jsx';

const footerLinks = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['achievements', 'Achievements'],
  ['contact', 'Contact'],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <div className="footer-identity">
          <a className="footer-name" href="#home">{profile.name}<ArrowUpRight size={16} aria-hidden="true" /></a>
          <p></p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <SocialLinks className="footer-social" />
      </div>
      <div className="page-shell footer-bottom">
        <span>© {new Date().getFullYear()} Madhusudhan R</span>
        <a className="back-to-top" href="#home" aria-label="Back to top">
          <span>Back to top</span><ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}