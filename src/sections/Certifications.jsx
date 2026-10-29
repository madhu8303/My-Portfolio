import { ArrowUpRight, BadgeCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { certifications } from '../data/profile.js';

export default function Certifications() {
  return (
    <section className="section-wrap certifications-section" id="certifications" aria-labelledby="certifications-title">
      <div className="page-shell certification-layout">
        <SectionHeading eyebrow="Learning" title="Certifications." id="certifications-title" />
        <div className="certification-list">
          {certifications.map((certification) => (
            <article className="certification-row" key={certification.name}>
              <BadgeCheck size={20} aria-hidden="true" />
              <div><h3>{certification.name}</h3><p>{certification.issuer}</p></div>
              <time>{certification.year}</time>
              <ArrowUpRight className="certification-arrow" size={17} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}