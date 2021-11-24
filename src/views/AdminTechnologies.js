/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getTechnologies } from '../api/data/technologyData';
import AdminTechnology from '../components/AdminTechnology';

const TechnologiesStyle = styled.div`
  position: absolute;

  .title {
    display: flex;
    justify-content: space-between;

    h1 {
      color: white;
      font-size: 45px;
      font-weight: 800;
      margin-top: 116px;
      margin-left: 36px;
    }

    a {
      height: 10px;
      margin-top: 135px;
      margin-right: 50px;
      margin-left: 100px;

      i {
        color: green;
        font-size: 25px;
        font-weight: 800;
      }
    }
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 50px auto;
    justify-content: center;

    h3 {
      color: white;
    }
  }
`;

export default function AdminTechnologies() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getTechnologies().then(setTechnologies);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <TechnologiesStyle>
      <div className="title">
        <h1>Admin Technologies</h1>
        <Link to="/add-technology">
          <i className="fas fa-plus" />
        </Link>
      </div>
      <div className="card-container">
        {technologies.length ? (
          technologies.map((technology) => (
            <AdminTechnology
              key={technology.firebaseKey}
              technology={technology}
              setTechnologies={setTechnologies}
            />
          ))
        ) : (
          <h3>No Technologies Added</h3>
        )}
      </div>
    </TechnologiesStyle>
  );
}
