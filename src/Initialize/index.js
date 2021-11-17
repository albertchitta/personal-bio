import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import Navigation from '../components/Navigation';
import Routes from '../routes/index';
import 'firebase/auth';

const ContainerStyle = styled.div`
  display: flex;
`;

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          uid: authed.uid,
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <ContainerStyle>
      <Navigation />
      <Routes user={user} />
    </ContainerStyle>
  );
}

export default Initialize;
