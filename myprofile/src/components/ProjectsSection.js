// src/components/ProjectsSection.js
import React from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaCode } from 'react-icons/fa';
import Card from './Card';

const ProjectsSection = () => {
  const projects = [
    {
      name: 'Project 1',
      repoLink: 'https://github.com/apdev18/project1',
      description: 'Description of project 1',
      stars: 10,
      forks: 5,
      language: 'JavaScript'
    },
    {
      name: 'Project 2',
      repoLink: 'https://github.com/apdev18/project2',
      description: 'Description of project 2',
      stars: 8,
      forks: 4,
      language: 'Python'
    },
    {
      name: 'Project 3',
      repoLink: 'https://github.com/apdev18/project3',
      description: 'Description of project 3',
      stars: 12,
      forks: 7,
      language: 'Java'
    },
    {
      name: 'Project 4',
      repoLink: 'https://github.com/apdev18/project4',
      description: 'Description of project 4',
      stars: 9,
      forks: 3,
      language: 'C#'
    },
    {
      name: 'Project 5',
      repoLink: 'https://github.com/apdev18/project5',
      description: 'Description of project 5',
      stars: 11,
      forks: 6,
      language: 'Go'
    },
    {
      name: 'Project 6',
      repoLink: 'https://github.com/apdev18/project6',
      description: 'Description of project 6',
      stars: 7,
      forks: 2,
      language: 'Ruby'
    }
  ];

  return (
    <Card className="projects-section">
      <div className="projects-header">
        <h2>Projects Github</h2>
        <a href="#see-all">See All</a>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Card key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.name}</h3>
              <a className="project-link" href={project.repoLink} target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </a>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-stats">
              <div className="compact-stat">
                <FaStar /> {project.stars}
                <FaCodeBranch style={{ marginLeft: '0.5rem' }} /> {project.forks}
              </div>
              <div className="stat">
                <FaCode /> {project.language}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default ProjectsSection;
