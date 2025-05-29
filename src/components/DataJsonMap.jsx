import React from 'react';
import './style.css';
import SelectSort from './SelectSort';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputForSorted from './InputForSorted';
import { useUpdatePostsMutation } from '../slices/apiApp';

const DataJsonMap = ({ data, handleDeletePosts, count, setCount }) => {
  const [sorted, setSorted] = useState('title');
  const [sortedCount, setSortedCount] = useState('10');
  const [searchParams, setSearchParams] = useState('');
  const [update] = useUpdatePostsMutation();

  /*хук useNavigate используется для того, что бы при нажатии 
  на кнопку меня перекидывало на другую страницу по 
  айдишнмку, эта логика написана в appRouter
  */

  const posts = [...data]
    .sort((a, b) => a[sorted].localeCompare(b[sorted]))
    .filter(post => post.title.includes(searchParams.toLowerCase()));
  const handleAddSelect = e => {
    setCount(e.target.value);
    setSortedCount('');
  };
  const updatePosts = () => {
    const title = prompt();
    console.log(update({ title }));
  };
  const router = useNavigate();
  return (
    <div>
      <SelectSort
        setSorted={setSorted}
        sorted={sorted}
        defaultValueDisabled="сортировка по"
        options={[
          { value: 'id', name: 'по id поста' },
          { value: 'title', name: 'по тексту' },
        ]}
      />
      <div>
        <input
          placeholder="add value in select"
          value={sortedCount}
          onChange={e => setSortedCount(e.target.value)}
        />
        <select value={count} onChange={handleAddSelect}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value={sortedCount}>{sortedCount}</option>
          <option value={[...posts].length}>{posts.length}</option>
        </select>
      </div>
      <InputForSorted searchParams={searchParams} setSearchParams={setSearchParams} />
      {posts.length === 0 ? (
        <h1>постов нет!</h1>
      ) : (
        <ol>
          {posts.map(post => (
            <div key={post.id}>
              <li className="dataJson">
                {post.title}
                <button onClick={() => router(`/postsComment/${post.id}`)}>open posts</button>
                <button onClick={() => updatePosts(post.id)}>обновить пост</button>
                <button type="button" onClick={() => handleDeletePosts(post.id)}>
                  delete
                </button>
              </li>
            </div>
          ))}
        </ol>
      )}
    </div>
  );
};

export default DataJsonMap;
