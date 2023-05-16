import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/backend.module.css';

const Admin = () => {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username === 'mani' && password === '123') {
      setAuthenticated(true);
    } else {
      alert('Invalid username or password');
    }
  };

  useEffect(() => {
    if (authenticated) {
      axios.get('https://mpar-bccba-default-rtdb.asia-southeast1.firebasedatabase.app/order.json')
        .then(res => {
          const newArr = Object.keys(res.data).map(el => {
            return res.data[el];
          });
          console.log(newArr);
          setData(newArr);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className={styles.container}>
       
  <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
  <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
  <button onClick={handleLogin}>Login</button>
</div>

    );
  }

  return (
    <div className={styles.container}>
      {data.map((el,i) => {
        return (
          <div className={styles.card} key={i}>
            <h2>{el.name}</h2>
            <p>Mobile: {el.mobile}</p>
            <p>Food Name: aa{el.food}</p>
            <p>Quantity: {el.quantity}</p>
            <p>Location: {el.location}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Admin;
