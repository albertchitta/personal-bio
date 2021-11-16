import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Routes from '../routes';

const ContainerStyle = styled.div`
  display: flex;
`;

function Initialize() {
  return (
    <ContainerStyle>
      <Navigation />
      <Routes />
    </ContainerStyle>
  );
}

export default Initialize;
