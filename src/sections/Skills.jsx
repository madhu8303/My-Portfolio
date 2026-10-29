import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { skillGroups } from '../data/profile.js';

export default function Skills() {
  return (
    <section className="section-wrap skills-section" id="skills" aria-labelledby="skills-title">
      <div className="page-shell">
        <SectionHeading eyebrow="The toolkit" title="Tools I work with." description="A practical foundation across software, data, and application development." id="skills-title" />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <div className="skill-group-heading"><span>0{index + 1}</span><ArrowUpRight size={15} aria-hidden="true" /></div>
              <h3>{group.title}</h3>
              <ul className="skill-tags">
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}