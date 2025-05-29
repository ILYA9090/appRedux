import React from 'react';
import * as cl from './loader.module.css';

const Loader = () => {
  return (
    <div className={cl.loaderWrapper}>
      <div className={cl.loader}></div>
    </div>
  );
};

export default Loader;
