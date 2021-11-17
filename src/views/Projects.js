import React from 'react';
import styled from 'styled-components';

const ProjectsStyle = styled.div`
  position: absolute;

  h1 {
    color: white;
    font-size: 45px;
    font-weight: 800;
    margin-top: 116px;
    margin-left: 18px;
  }
`;

export default function Projects() {
  return (
    <ProjectsStyle>
      <h1>Projects</h1>
    </ProjectsStyle>
  );
}
