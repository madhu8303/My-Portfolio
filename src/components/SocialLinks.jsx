import { Github, Linkedin } from 'lucide-react';
import { profile } from '../data/profile.js';

export default function SocialLinks({ className = '' }) {
  const links = [
    { label: 'GitHub', href: profile.links.github, Icon: Github },
    { label: 'LinkedIn', href: profile.links.linkedin, Icon: Linkedin },
  ].filter((link) => link.href);

  if (!links.length) return null;

  return (
    <div className={`social-links ${className}`} aria-label="Social profiles">
      {links.map(({ label, href, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`${label} profile`}>
          <Icon size={18} aria-hidden="true" />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}