import { ArrowDownToLine, ArrowRight, MapPin } from 'lucide-react';
import { profile } from '../data/profile.js';
import SocialLinks from '../components/SocialLinks.jsx';

export default function Hero() {
  return (
    <section className="hero-section page-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow"><span className="status-dot" /> Computer Science · AI &amp; ML</p>
        <h1 id="hero-title">MADHUSUDHAN <span>R</span></h1>
        <p className="hero-role">{profile.headline}</p>
        <p className="hero-intro">{profile.introduction}</p>
        <p className="location-line"><MapPin size={16} aria-hidden="true" />{profile.location}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View My Projects<ArrowRight size={16} aria-hidden="true" /></a>
          <a className="button button-quiet" href="#contact">Contact Me</a>
          <a className="button button-quiet resume-hero" href={profile.links.resume} download>
            <ArrowDownToLine size={16} aria-hidden="true" /> Download Resume
          </a>
        </div>
        <SocialLinks className="hero-social" />
      </div>
      <span className="hero-avatar" aria-hidden="true">MR</span>
    </section>
  );
}