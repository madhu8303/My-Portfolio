import { ArrowUpRight, BriefcaseBusiness, MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { experience } from '../data/profile.js';

export default function Experience() {
  return (
    <section className="section-wrap experience-section" id="experience" aria-labelledby="experience-title">
      <div className="page-shell">
        <SectionHeading eyebrow="Experience" title="Learning by building." id="experience-title" />
        <article className="experience-card">
          <div className="experience-rail">
            <span>
              {experience.organizationImage ? (
                <img
                  className="experience-logo"
                  src={experience.organizationImage}
                  alt={experience.organizationImageAlt}
                  loading="lazy"
                />
              ) : (
                <BriefcaseBusiness size={19} aria-hidden="true" />
              )}
            </span>
          </div>
          <div className="experience-main">
            <div className="experience-topline"><p className="eyebrow">{experience.duration}</p><ArrowUpRight size={17} aria-hidden="true" /></div>
            <h3>{experience.role}</h3>
            <p className="experience-company">{experience.organization}<span>·</span><MapPin size={14} aria-hidden="true" />{experience.location}</p>
            <ul className="experience-list">
              {experience.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
            </ul>
          </div>
          <div className="experience-index">01</div>
        </article>
      </div>
    </section>
  );
}