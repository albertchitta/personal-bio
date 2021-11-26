import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import AdminRoutes from '../routes/AdminRoutes';
import PublicRoutes from '../routes/PublicRoutes';
import 'firebase/auth';
import Navbar from '../components/Nav/Navbar';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
    <StyledContainer>
      <Navbar user={user} />
      {user?.isAdmin ? (
        <>
          <AdminRoutes />
        </>
      ) : (
        <>
          <PublicRoutes user={user} />
        </>
      )}
    </StyledContainer>
  );
}

export default Initialize;
