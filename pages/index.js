import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';
import React, { useState, useEffect } from 'react';

const Home = () => {

  const [data, setData] = useState('');
  
  useEffect(async () => {
    const { message } = await( await fetch(`/api/Test`)).json();
    setData(message);
  },[]);

  return (
  <div className="home">
    <h1>Hey Tyson!!! This is a nextjs azure static web app!!!</h1>
    <h2>What does the API have to say?</h2>
    <br/>
    <br/>
    <h2>{data}</h2>
  </div>)
}

export default Home;
