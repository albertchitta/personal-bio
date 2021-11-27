/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getTechnologies } from '../api/data/technologyData';
import AdminTechnology from '../components/AdminTechnology';

const TechnologiesStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 116px auto;
  width: 80%;
  justify-content: center;

  .title {
    h1 {
      color: #2f4550;
      font-size: 45px;
      font-weight: 800;
      text-align: center;
    }

    a {
      float: right;

      i {
        color: #52b788;
        font-size: 25px;
        font-weight: 800;
      }

      i:hover {
        color: #40916c;
      }
    }
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    margin: 50px auto;
    justify-content: center;

    h3 {
      color: #283618;
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
