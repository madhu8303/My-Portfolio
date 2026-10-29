import { BookOpen, BriefcaseBusiness, GraduationCap, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { education } from '../data/profile.js';

const highlights = [
  { label: 'CGPA', value: education.cgpa, icon: GraduationCap },
  { label: 'Featured projects', value: '03', icon: Sparkles },
  { label: 'Research', value: 'IEEE IKECS · 2026', icon: BookOpen },
  { label: 'Internship', value: 'Python Full Stack with GenAI', icon: BriefcaseBusiness },
];

export default function About() {
  return (
    <section className="section-wrap about-section" id="about" aria-labelledby="about-title">
      <div className="page-shell">
        <SectionHeading eyebrow="A little about me" title="Curiosity, meet execution." id="about-title" />
        <div className="about-layout">
          <div className="about-copy">
            <p className="about-lead">I’m a software engineering graduate who likes building things that work in the real world.</p>
            <p>I completed my B.E. in Computer Science and Engineering (AI &amp; ML) at {education.institution}, affiliated with VTU, graduating in {education.graduation} with a CGPA of {education.cgpa}.</p>
            <p>My interests span backend development, AI integration, computer vision, cloud computing, and scalable software. Academic projects and Python Full Stack internship work have given me a practical foundation in taking ideas from problem to working application.</p>
            <div className="education-note">
              <GraduationCap size={19} aria-hidden="true" />
              <div><strong>{education.degree}</strong><span>{education.institution} · {education.graduation}</span></div>
            </div>
          </div>
          <div className="stats-grid" aria-label="Education and experience highlights">
            {highlights.map(({ label, value, icon: Icon }, index) => (
              <article className={`stat-panel${index === 0 ? ' stat-featured' : ''}`} key={label}>
                <Icon size={18} aria-hidden="true" />
                <span className="stat-label">{label}</span>
                <strong>{value}</strong>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}