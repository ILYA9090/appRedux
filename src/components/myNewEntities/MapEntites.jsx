import React from 'react';
import { useGetEntitiesQuery, useDeleteEntitiesMutation } from '../../slices/apiApp';
import { useState } from 'react';
const MapEntites = () => {
  const [sorted, setSorted] = useState('id');
  const [text, setText] = useState('');
  const { data = [] } = useGetEntitiesQuery();
  const [remove] = useDeleteEntitiesMutation();

  const deleteEntities = async id => await remove(id);
  const sortedData = [...data]
    .sort((a, b) => a[sorted].localeCompare(b[sorted]))
    .filter(dat => dat.name.includes(text));
  return (
    <div>
      <select value={sorted} onChange={e => setSorted(e.target.value)}>
        <option value="" disabled>
          сортировка по
        </option>
        <option value="id">по id</option>
        <option value="name">по имени</option>
        <option value="surname">по фамилии</option>
      </select>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      {sortedData.map(ent => (
        <ul key={ent.id}>
          <li>
            {ent.name} {ent.surname} <button onClick={() => deleteEntities(ent.id)}>delete</button>{' '}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MapEntites;
