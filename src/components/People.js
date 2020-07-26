import React from 'react';
import { useQuery } from 'react-query';
import Person from './Person';

const fetchPlanets = async () => {
  const response = await fetch('http://swapi.dev/api/people');

  return response.json();
};

const People = () => {
  const { data, status } = useQuery('people', fetchPlanets);

  return (
    <div>
      <h2>People</h2>

      {status === 'loading' && <div>Loading data...</div>}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <div>
          {data.results.map(person => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
