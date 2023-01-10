import React from 'react';
import AllPosts from '../../container/Posts/AllPosts';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = () => {
  
  return (
    <Card className={classes.home}>
      <AllPosts/>
    </Card>
  );
};

export default Home;
