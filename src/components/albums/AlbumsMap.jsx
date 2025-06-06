import React from 'react';
import { useMemo } from 'react';
import { useGetAlbumsQuery } from '../../slices/apiApp';
import { useState } from 'react';
import SelectSort from '../SelectSort';
import InputForSorted from '../InputForSorted';
import { useDeleteAlbumsMutation } from '../../slices/apiApp';
import { useNavigate } from 'react-router-dom';
import * as cl from './Albums.module.css';
import Loader from '../Pages/Loader';
const AlbumsMap = () => {
  const [count, setCount] = useState('');
  const [countValue, setCountValue] = useState('');
  const [sorted, setSorted] = useState('id');
  const [searchParams, setSearchParams] = useState('');
  const { data = [], isLoading } = useGetAlbumsQuery(count);
  const [remove] = useDeleteAlbumsMutation();
  // реализовать сортировку по title и по body, важно делать сортировку именно копируя массив через оператор spread...
  // [...data].sort((a,b)=> a.title.localeCompare(b.title))

  /*<ol style={{ marginTop: "50px" }}>
{[...data].sort((a,b)=> a.title.localeCompare(b.title)).map((alb) => (
  <li style={{ marginTop: "20px" }} key={alb.id}>
    {alb.title}
  </li>
))}
</ol>
*/
  const handleRemoveItem = async id => await remove(id);
  const route = useNavigate();
  const handleSelect = e => {
    setCount(e.target.value);
    setCountValue('');
  };

  const al = useMemo(() => {
    const dat = [...data]
      .sort((a, b) => a[sorted].localeCompare(b[sorted]))
      .filter(post => post.title.includes(searchParams.toLowerCase()));
    return dat;
  }, [sorted, data, searchParams]);

  //const al = [...data].sort((a, b) => a[sorted].localeCompare(b[sorted])).filter((post)=> post.title.includes(searchParams.toLowerCase())); //[sorted] обращаюсь к ключи через скобки так как у меня он меняется динамически
  if (isLoading) {
    return <Loader />;
  }
  return al.length ? (
    <div>
      <span style={{ margin: '10px' }}>add and select</span>
      <input value={countValue} onChange={e => setCountValue(e.target.value)} placeholder="50max" />
      <div>
        <select value={count} onChange={handleSelect}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value={countValue}>{countValue}</option>
        </select>
      </div>
      <InputForSorted searchParams={searchParams} setSearchParams={setSearchParams} />
      <SelectSort
        sorted={sorted}
        setSorted={setSorted}
        defaultValueDisabled="сортировка по"
        options={[
          { value: 'id', name: 'по id' },
          { value: 'title', name: 'по title' },
          { value: 'body', name: 'по body' },
        ]}
      />
      <div className={cl.list}>
        <ol style={{ marginTop: '50px' }}>
          {al.map(alb => (
            <li key={alb.id} className={cl.ListMap}>
              {alb.title}/{alb.body.length > a ? alb.body.slice(0, -145) + '...' : alb.body}
              <button onClick={handleRemoveItem(alb.id)}>delete</button>
              <button onClick={() => route(`/AlbumsThings/${alb.id}`)}>открыть альбом</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  ) : (
    <h1 style={{ marginLeft: '45%', marginTop: '140px' }}>ПУСТО!</h1>
  );
};

export default AlbumsMap;
