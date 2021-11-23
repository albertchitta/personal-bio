import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import Navigation from '../components/Navigation';
import AdminRoutes from '../routes/AdminRoutes';
import PublicRoutes from '../routes/PublicRoutes';
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
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          isAdmin: process.env.REACT_APP_ADMIN_UID === authed.uid,
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <ContainerStyle>
      <Navigation user={user} />
      {user?.isAdmin ? (
        <>
          <AdminRoutes />
        </>
      ) : (
        <>
          <PublicRoutes user={user} />
        </>
      )}
    </ContainerStyle>
  );
}

export default Initialize;
