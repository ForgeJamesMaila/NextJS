import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';
import React, { useState, useEffect } from 'react';

const Home = () => {

  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/Test`)).json();
      setData(text);
    })();
  });

  return (
  <div className="home">
    <h1>Hey Tyson!!! This is a nextjs azure static web app!!!</h1>
    <span>What does the API have to say? <b>{data}</b></span>
  </div>)
}

export default Home;
