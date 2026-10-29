import { Award, BookOpen, Trophy } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { achievements } from '../data/profile.js';

const icons = { Publication: BookOpen, Award: Trophy, Hackathon: Award };

export default function Achievements() {
  return (
    <section className="section-wrap achievements-section" id="achievements" aria-labelledby="achievements-title">
      <div className="page-shell">
        <SectionHeading eyebrow="Recognition" title="Milestones along the way." id="achievements-title" />
        <div className="achievement-list">
          {achievements.map((achievement, index) => {
            const Icon = icons[achievement.type];
            return (
              <article className="achievement-row" key={`${achievement.title}-${achievement.date}`}>
                <span className="achievement-index">0{index + 1}</span>
                <span className="achievement-icon"><Icon size={19} aria-hidden="true" /></span>
                <div className="achievement-copy"><h3>{achievement.title}</h3><p>{achievement.detail}</p></div>
                <time>{achievement.date}</time>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}