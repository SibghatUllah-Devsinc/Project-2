import React from 'react';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const {onLogout} = props

  return (
    <header className={classes['main-header']}>
      <h1>Project 2</h1>
      <Navigation  onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
