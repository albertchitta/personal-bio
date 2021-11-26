import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TechnologyForm from '../components/TechnologyForm';
import { getTechnology } from '../api/data/technologyData';

const EditTechnologyStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 116px auto;
  width: 100%;
  justify-content: center;

  h1 {
    color: #606c38;
    font-size: 45px;
    font-weight: 800;
    text-align: center;
  }
`;

export default function EditTechnology() {
  const [editTechnology, setEditTechnology] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getTechnology(firebaseKey).then(setEditTechnology);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <EditTechnologyStyle>
      <h1>Edit a Technology</h1>
      <TechnologyForm technology={editTechnology} />
    </EditTechnologyStyle>
  );
}
