import React, { useState, useEffect, useContext } from 'react';
import userStore from 'store/userStore';
import { Link } from 'react-router-dom';

function Home() {
  const [sayi, setSayi] = useState(0);
  const [name, setName] = useState('');
  const { data, setData } = useContext(userStore.Context);

  useEffect(() => {
    setName(data);
  }, []);

  useEffect(() => {
    setData(name);
  }, [sayi, name]);

  const artir = () => {
    setSayi((state) => state + 1);
  };

  const onTextChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  return (
    <div>
      home
      <br />
      <br />
      <Link to={'/about'}>about</Link>
      <button onClick={artir}>{sayi}</button>
      <input onChange={onTextChange} value={data} />
    </div>
  );
}

export default Home;
