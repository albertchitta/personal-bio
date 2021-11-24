import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProjectForm from '../components/ProjectForm';
import { getProject } from '../api/data/projectData';

const EditProjectStyle = styled.div`
  h1 {
    color: white;
    font-size: 45px;
    font-weight: 800;
    margin-top: 116px;
    margin-left: 36px;
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
