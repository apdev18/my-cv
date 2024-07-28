import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
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
  gap: 1rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const ProjectCard = styled(Card)``;

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
          <h2>Projects Github <a href="#see-all">See All</a></h2>
          <ProjectsGrid>
            <ProjectCard>Card Project 1</ProjectCard>
            <ProjectCard>Card Project 2</ProjectCard>
            <ProjectCard>Card Project 3</ProjectCard>
            <ProjectCard>Card Project 4</ProjectCard>
            <ProjectCard>Card Project 5</ProjectCard>
            <ProjectCard>Card Project 6</ProjectCard>
            <ProjectCard>Card Project 7</ProjectCard>
            <ProjectCard>Card Project 8</ProjectCard>
          </ProjectsGrid>
        </ProjectsSection>
      </Main>
      <InfoSection>
        <InfoCard>Education</InfoCard>
        <InfoCard>Certificate</InfoCard>
        <InfoCard>Skills</InfoCard>
      </InfoSection>
      <Footer>
        Footer Content
      </Footer>
    </Container>
  );
};

export default Beranda;
