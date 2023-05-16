import { useState, useEffect } from 'react';
import styles from '../styles/order.module.css'
import axios from 'axios';
import Header from '@/components/Header';

const Order = () => {

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');
  const [food, setFood] = useState('');
  const [quan, setQuan] = useState('');
  
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
        },
        () => {
          alert('Unable to retrieve your location');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser');
    }
  };

  const handleSubmit = (e) => {
  var inputName = name;
  var inputMobile = mobile;
  var inputQuan = quan;

  if(inputName === null || name==""){
    alert("Name Should Not Be Null")
  }

  if(inputMobile.length<  10){
    alert("Enter Valid Mobile Number")
  }

  if(inputQuan === null || quan==""){
    alert("Enter Quantity Of The Food")
  }

    let valid = false;
    e.preventDefault();
    const foodsList = ["chicken briyani","mutton briyani","egg and steak","egg steak","fish fry","chicken noodles","veg noodles","salad","steak","sushi","chicken thandoori"];
     foodsList.map(el=>{
      if(food.toLowerCase() === el) {
        console.log(el);
        valid = true;
        return el
      }
      })

    if(valid){
      const form = {
        name,
        mobile,
        location,
        food,
        quantity:quan
      };
      axios.post('https://mpar-bccba-default-rtdb.asia-southeast1.firebasedatabase.app/order.json', form)
        .then(res => {
          console.log(res);
          alert("Successfully ordered. Please wait some time.")
        })
        .catch(err => {
          console.log(err);
        })
    }
    else{
      alert("Sorry for Inconveince !! The Food is Not Alavilable This Time !!")
      return 0;
    }
  };

  return (
    <div>
      <Header/>
      <img className={styles.od} src="./images/order.png" alt="" />
    <form onSubmit={handleSubmit}>
      <div className={styles.ordercontainer}>
        <h1>Place your order</h1>

        <div className={styles.formgroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="tel" id="mobile" name="mobile" value={mobile} onChange={handleMobileChange} />
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="food">Food Name:</label>
          <input type="text" id="food" name="food" value={food} onChange={(e) => setFood(e.target.value)} /> 
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="quan">Quantity:</label>
          <input type="text" id="quan" name="quan" value={quan} onChange={(e) => setQuan(e.target.value)} /> 
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="location">Location:</label>
          <div className={styles.locationinput}>
            <input type="text" id="location" name="location" value={location} readOnly /> 
            
            <button  type="button" onClick={handleLocationClick}>Get Current Location</button>
            
          </div>
        </div>
        <button className={styles.btn} type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
};

export default Order;
