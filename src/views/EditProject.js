import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProjectForm from '../components/ProjectForm';
import { getProject } from '../api/data/projectData';

const EditProjectStyle = styled.div`
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

export default function EditProject() {
  const [editProject, setEditProject] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getProject(firebaseKey).then(setEditProject);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <EditProjectStyle>
      <h1>Edit a Project</h1>
      <ProjectForm project={editProject} />
    </EditProjectStyle>
  );
}
