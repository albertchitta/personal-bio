import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTechnologies } from '../api/data/technologyData';
import Technology from '../components/PublicTechnology';

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

export default function PublicTechnologies() {
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
        <h1>Technologies</h1>
      </div>
      <div className="card-container">
        {technologies.length ? (
          technologies.map((technology) => (
            <Technology
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
