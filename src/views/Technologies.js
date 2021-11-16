import React from 'react';
import styled from 'styled-components';

const TechnologiesStyle = styled.div`
  h1 {
    color: white;
    font-size: 45px;
    font-weight: 800;
    margin-top: 116px;
    margin-left: 18px;
  }
`;

export default function Technologies() {
  return (
    <TechnologiesStyle>
      <h1>Technologies</h1>
    </TechnologiesStyle>
  );
}
