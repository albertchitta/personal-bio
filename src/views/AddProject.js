import React from 'react';
import styled from 'styled-components';
import ProjectForm from '../components/ProjectForm';

const AddProjectStyle = styled.div`
  h1 {
    color: white;
    font-size: 45px;
    font-weight: 800;
    margin-top: 116px;
    margin-left: 18px;
  }
`;

export default function AddProject() {
  return (
    <AddProjectStyle>
      <h1>Add a Project</h1>
      <ProjectForm project={{}} />
    </AddProjectStyle>
  );
}
