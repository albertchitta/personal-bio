import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TechnologyForm from '../components/TechnologyForm';
import { getTechnology } from '../api/data/technologyData';

const EditTechnologyStyle = styled.div`
  h1 {
    color: white;
    font-size: 45px;
    font-weight: 800;
    margin-top: 116px;
    margin-left: 36px;
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
