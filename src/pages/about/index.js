import React, { useEffect, useContext } from 'react';
import userStore from 'store/userStore';
import { Link } from 'react-router-dom';

function About() {
  const { data } = useContext(userStore.Context);

  useEffect(() => {}, []);

  return (
    <div>
      about {data}
      <br />
      <Link to={'/'}>home</Link>
    </div>
  );
}

export default About;
