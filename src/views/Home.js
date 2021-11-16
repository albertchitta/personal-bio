import React from 'react';
import styled from 'styled-components';

const HomeStyle = styled.div`
  h1 {
    color: white;
  }
`;

export default function Home() {
  return (
    <HomeStyle>
      <h1>Albert Chittaphong</h1>
    </HomeStyle>
  );
}
