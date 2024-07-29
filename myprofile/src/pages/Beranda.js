import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram, FaStar, FaCodeBranch, FaCode } from 'react-icons/fa';
import Card from '../components/Card';

// Styled components
const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  gap: 1rem;
  padding: 1rem;
  background-color: #1a1a1a; /* Background color for dark mode */
  color: #fff; /* Text color for dark mode */
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333; /* Darker background for header */
  border-radius: 8px;
`;

const Navbar = styled.nav`
  display: flex;
  gap: 1rem;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
`;

const ProfileCard = styled(Card)`
  grid-column: 1;
  padding: 32px;
  text-align: center; /* Center-align text */
  height: fit-content; /* Ensures card height is determined by content */
  max-height: 400px; /* Set a maximum height for the ProfileCard */
  overflow: auto; /* Allow scrolling if content overflows */
`;

const ProfileImageWrapper = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  border: 4px solid #fff; /* White border around the profile picture */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem; /* Center the wrapper and add bottom margin */
`;

const ProfileImage = styled.img`
  width: 120px; /* Slightly smaller than the wrapper */
  height: 120px;
  border-radius: 50%;
`;

const ProfileName = styled.h2`
  color: #fff;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const JobTitle = styled.p`
  color: #aaa;
  margin: 0;
  margin-bottom: 1rem;
`;

const ResumeLink = styled.a`
  color: #1e90ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProjectsSection = styled(Card)`
  grid-column: 2;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 0;
  padding: 1.2rem; /* Adjust padding to reduce the gap */
`;

const ProjectsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0; /* Adjust margin to reduce the gap */
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns */
  gap: 0.7rem; /* Adjust gap between project cards */
`;

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 0.7rem; /* Adjust padding inside project cards */
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem; /* Adjust margin to reduce the gap */
`;

const ProjectTitle = styled.h3`
  margin: 0;
`;

const ProjectLink = styled.a`
  color: #1e90ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectDescription = styled.p`
  color: #aaa;
  margin: 0 0 0.5rem 0;
`;

const ProjectStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Adjust gap between icon and text */
  color: #aaa;
`;

const CompactStat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem; /* Smaller gap between icons */
  color: #aaa;
`;

const InfoSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const InfoCard = styled(Card)``;

const Footer = styled.footer`
  background-color: #333; /* Darker background for footer */
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
`;

const Beranda = () => {
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
      stars: 20,
      forks: 10,
      language: 'Python'
    },
    {
      name: 'Project 3',
      repoLink: 'https://github.com/apdev18/project3',
      description: 'Description of project 3',
      stars: 15,
      forks: 8,
      language: 'Java'
    },
    {
      name: 'Project 4',
      repoLink: 'https://github.com/apdev18/project4',
      description: 'Description of project 4',
      stars: 25,
      forks: 12,
      language: 'C++'
    },
    {
      name: 'Project 5',
      repoLink: 'https://github.com/apdev18/project5',
      description: 'Description of project 5',
      stars: 30,
      forks: 14,
      language: 'Ruby'
    },
    {
      name: 'Project 6',
      repoLink: 'https://github.com/apdev18/project6',
      description: 'Description of project 6',
      stars: 5,
      forks: 2,
      language: 'Go'
    },
  ];

  return (
    <Container>
      <Header>
        <div>My Profile</div>
        <Navbar>
          <a href="#beranda">Beranda</a>
          <a href="#tentang">Tentang</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#pengalaman">Pengalaman</a>
          <a href="#skills">Skills</a>
          <a href="#sertifikat">Sertifikat</a>
        </Navbar>
        <button>Dark Mode</button>
      </Header>
      <Main>
        <ProfileCard>
          <ProfileImageWrapper>
            <ProfileImage src="/profile.jpg" alt="Profile" />
          </ProfileImageWrapper>
          <ProfileName>Alga Prananda</ProfileName>
          <JobTitle>Data Analyst | Web Developer</JobTitle>
          <ResumeLink href="path/to/your/resume.pdf" download>
            Download Resume/CV
          </ResumeLink>
          <SocialMediaIcons>
            <a href="https://github.com/apdev18" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/apdevs18" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/__qlgqprqnqndq" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
          </SocialMediaIcons>
        </ProfileCard>
        <ProjectsSection>
          <ProjectsHeader>
            <h2>Projects Github</h2>
            <a href="#see-all">See All</a>
          </ProjectsHeader>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard key={index}>
                <ProjectHeader>
                  <ProjectTitle>{project.name}</ProjectTitle>
                  <ProjectLink href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20} />
                  </ProjectLink>
                </ProjectHeader>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectStats>
                  <CompactStat>
                    <FaStar /> {project.stars}
                    <FaCodeBranch style={{ marginLeft: '0.5rem' }} /> {project.forks}
                  </CompactStat>
                  <Stat>
                    <FaCode /> {project.language}
                  </Stat>
                </ProjectStats>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </ProjectsSection>
      </Main>
      <InfoSection>
        <InfoCard>Education</InfoCard>
        <InfoCard>Sertifikat</InfoCard>
        <InfoCard>Skills</InfoCard>
      </InfoSection>
      <Footer>Footer Content</Footer>
    </Container>
  );
};

export default Beranda;
