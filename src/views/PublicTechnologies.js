import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTechnologies } from '../api/data/technologyData';
import Technology from '../components/PublicTechnology';

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
