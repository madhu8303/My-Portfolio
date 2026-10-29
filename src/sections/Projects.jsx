import { useState } from 'react';
import { Activity, ArrowDown, ArrowUpRight, Github, Hand, Leaf } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);
  const projectIcons = [Activity, Leaf, Hand];

  return (
    <section className="section-wrap projects-section" id="projects" aria-labelledby="projects-title">
      <div className="page-shell">
        <SectionHeading eyebrow="Selected work" title="Projects with a purpose." description="A few ways I’ve explored AI, computer vision, and practical software." id="projects-title" />
        <div className="projects-list">
          {projects.map((project) => {
            const expanded = expandedProject === project.number;
            const ProjectIcon = projectIcons[Number(project.number) - 1];
            return (
              <article className={`project-card${expanded ? ' is-expanded' : ''}`} key={project.number}>
                <div className="project-number">{project.number}<span /></div>
                <div className="project-content">
                  <p className="project-kicker">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="technology-list" aria-label={`${project.title} technologies`}>
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  {expanded && (
                    <div className="project-details">
                      <p className="detail-label">Project highlights</p>
                      <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                    </div>
                  )}
                  <div className="project-actions">
                    <button
                      className="text-action"
                      type="button"
                      aria-expanded={expanded}
                      onClick={() => setExpandedProject(expanded ? null : project.number)}
                    >
                      {expanded ? 'Hide Details' : 'View Details'}<ArrowDown className={expanded ? 'arrow-turned' : ''} size={15} aria-hidden="true" />
                    </button>
                    {project.github && <a className="text-action" href={project.github} target="_blank" rel="noreferrer"> <Github size={15} aria-hidden="true" /> GitHub</a>}
                    {project.demo && <a className="text-action" href={project.demo} target="_blank" rel="noreferrer">Live Demo<ArrowUpRight size={15} aria-hidden="true" /></a>}
                  </div>
                </div>
                <div className={`project-mark project-mark-${project.number}${project.image ? ' project-mark-has-image' : ''}`}>
                  {project.image ? (
                    <img className="project-preview-image" src={project.image} alt={project.imageAlt} loading="lazy" />
                  ) : (
                    <ProjectIcon size={34} strokeWidth={1.5} aria-hidden="true" />
                  )}
                </div>
              </article>
            );
          })}
        </div>
        <p className="links-note"></p>
      </div>
    </section>
  );
}