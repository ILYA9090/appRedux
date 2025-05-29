import React from 'react';
import { useGetClientsQuery } from '../../slices/apiApp';
const MapDataNewClient = () => {
  const { data = [] } = useGetClientsQuery();

  return (
    <div>
      <ul>
        {data.map(clients => (
          <li key={clients.id}>
            <p>
              name : {clients.name}, surname : {clients.surname}, number: {clients.number}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapDataNewClient;
