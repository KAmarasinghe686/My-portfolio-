import React from 'react';
import './Skills.css';

export default function Skills() {
  const skills = [
    { name: 'Figma', level: 60 },
    { name: 'UI/UX Design', level: 65 },
    { name: 'HTML/CSS', level: 60 },
    { name: 'JavaScript', level: 50 },
    { name: 'React', level: 55 },
    { name: 'Photoshop', level: 85 }
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}