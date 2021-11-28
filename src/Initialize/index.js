import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import AdminRoutes from '../routes/AdminRoutes';
import PublicRoutes from '../routes/PublicRoutes';
import 'firebase/auth';
import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  min-height: 100vh;
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
          email: authed.email,
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
      <Footer />
    </StyledContainer>
  );
}

export default Initialize;
