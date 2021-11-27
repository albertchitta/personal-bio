import React from 'react';
import styled from 'styled-components';
import ProjectForm from '../components/ProjectForm';

const AddProjectStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 116px auto;
  width: 100%;
  justify-content: center;

  h1 {
    color: #2f4550;
    font-size: 45px;
    font-weight: 800;
    text-align: center;
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
