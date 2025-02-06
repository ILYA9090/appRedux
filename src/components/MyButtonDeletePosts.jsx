import React from 'react';
import { useRemoveAllPostsMutation } from '../slices/apiApp';

const MyButtonDeletePosts = () => {
  const [removeAll] = useRemoveAllPostsMutation();

  const HandleRemoveAllPoSTS = async () => await removeAll();

  return <button onClick={HandleRemoveAllPoSTS}>удалить все посты!</button>;
};

export default MyButtonDeletePosts;
