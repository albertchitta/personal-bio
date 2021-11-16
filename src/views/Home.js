import React from 'react';
import styled from 'styled-components';

const HomeStyle = styled.div`
  h1 {
    color: white;
    font-size: 45px;
    font-weight: 800;
    margin-top: 116px;
    margin-left: 18px;
  }
`;

export default function Home() {
  return (
    <HomeStyle>
      <h1>Albert Chittaphong</h1>
    </HomeStyle>
  );
}
