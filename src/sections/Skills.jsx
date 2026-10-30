import { useEffect } from 'react';
import {
  Activity,
  BrainCircuit,
  Bug,
  ChartNoAxesColumn,
  Cloud,
  Code2,
  CodeXml,
  Coffee,
  Database,
  Eye,
  FlaskConical,
  GitBranch,
  Github,
  Gauge,
  Layers3,
  LockKeyhole,
  Network,
  Route,
  ScanSearch,
  Server,
  Workflow,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { skillGroups } from '../data/profile.js';

const skillIcons = {
  Python: Code2,
  Java: Coffee,
  JavaScript: CodeXml,
  SQL: Database,
  Flask: FlaskConical,
  Django: Layers3,
  FastAPI: Activity,
  'REST APIs': Route,
  CRUD: Server,
  MySQL: Database,
  SQLite: Database,
  'Machine Learning': BrainCircuit,
  'Deep Learning': Network,
  NLP: ScanSearch,
  LLMs: BrainCircuit,
  OpenCV: Eye,
  MediaPipe: Activity,
  NumPy: ChartNoAxesColumn,
  Pandas: ChartNoAxesColumn,
  HTML5: CodeXml,
  CSS3: Code2,
  'React.js': Workflow,
  Vite: Activity,
  OOP: Code2,
  Git: GitBranch,
  GitHub: Github,
  SDLC: Workflow,
  'Problem Solving': Gauge,
  Debugging: Bug,
  'Cloud Computing': Cloud,
};

const skillLogos = {
  HTML5: '/skills/html5.png',
  CSS3: '/skills/css3.png',
  'React.js': '/skills/react.svg',
  Vite: '/skills/vite.svg',
};

const marqueeDurations = [22, 27, 19, 34, 21];

function setCardTilt(event) {
  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
  const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

  card.style.setProperty('--tilt-x', `${vertical * -4}deg`);
  card.style.setProperty('--tilt-y', `${horizontal * 5}deg`);
}

function resetCardTilt(event) {
  event.currentTarget.style.setProperty('--tilt-x', '0deg');
  event.currentTarget.style.setProperty('--tilt-y', '0deg');
}

export default function Skills() {
  useEffect(() => {
    const cards = document.querySelectorAll('.skills-section .skill-group');
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-wrap skills-section" id="skills" aria-labelledby="skills-title">
      <div className="page-shell">
        <SectionHeading eyebrow="Skills" title="Technical Skills" description="Technologies and tools I work with." id="skills-title" />
        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <article
              className="skill-group"
              key={group.title}
              onPointerMove={(event) => {
                if (event.pointerType === 'mouse') setCardTilt(event);
              }}
              onPointerLeave={resetCardTilt}
              style={{ '--marquee-duration': `${marqueeDurations[groupIndex]}s` }}
            >
              <h3>{group.title}</h3>
              <div className="skill-marquee" aria-label={`${group.title} technologies`}>
                <div className="skill-marquee-track">
                  {[0, 1, 2].map((copy) => (
                    <ul
                      className="skill-marquee-set"
                      key={copy}
                      aria-hidden={copy > 0 ? 'true' : undefined}
                    >
                      {group.skills.map((skill, skillIndex) => {
                        const SkillIcon = skillIcons[skill] || LockKeyhole;
                        const logo = skillLogos[skill];

                        return (
                          <li
                            className="skill-item"
                            key={skill}
                            data-tooltip={skill}
                            tabIndex={copy === 0 ? 0 : -1}
                            style={{ '--item-delay': `${skillIndex * 65}ms` }}
                          >
                            <span className="skill-icon">
                              {logo
                                ? <img src={logo} alt="" aria-hidden="true" />
                                : <SkillIcon size={21} strokeWidth={2} aria-hidden="true" />}
                            </span>
                            <span className="skill-name">{skill}</span>
                          </li>
                        );
                      })}
                    </ul>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}