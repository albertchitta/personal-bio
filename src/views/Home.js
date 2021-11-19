import React from 'react';
import styled from 'styled-components';

const HomeStyle = styled.div`
  position: absolute;
  text-align: center;

  h1 {
    color: white;
    font-size: 45px;
    font-weight: 800;
    margin-top: 500px;
  }

  p {
    color: white;
  }
`;

export default function Home() {
  return (
    <HomeStyle>
      <h1>Albert Chittaphong</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </HomeStyle>
  );
}
