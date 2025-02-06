import React from 'react';
import { useGetClientsQuery } from '../../slices/apiApp';
const MapDataNewClient = () => {
  const { data = [] } = useGetClientsQuery();

  return (
    <div>
      <ul>
        {data.map(clients => (
          <li key={clients.id}>
            name : {clients.name}, surname : {clients.surname}, number: {clients.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapDataNewClient;
