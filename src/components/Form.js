import React, { useState } from 'react'
import Cricketers from './Cricketers';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';
import cricketer from './cricketer.jpg';
import cup from './cup.png'


export default function Form() {
  const [position, setposition] = useState('');
  const [player, setplayer] = useState('');
  const [rating, setrating] = useState('');

  let history = useNavigate(); 
    const handleSubmit = (e) => {
      e.preventDefault();
      let a = position, b = player, c = rating;
    Cricketers.push({ a, b, c });
    // console.log(Cricketers);
    history('/added');


  }

  return (
    <div>
      <h1>Shipping Details</h1>
      <form className='container'>
        <label>Name</label><br></br>
        <input type="text"   placeholder='Enter Full Name' onChange={(e) => setposition(e.target.value)} required></input><br></br>
        <label>Contact</label><br></br>
        <input type="number"   placeholder='Enter Mobile Number' onChange={(e) => setplayer(e.target.value)} required></input><br></br>
        <label >Shipping Address</label><br></br>
        <input type="text" placeholder='Enter Address' onChange={(e) => setrating(e.target.value)} required></input><br></br>
        <Link to='/added'>
          <input className='btn' type="submit" onClick={handleSubmit}></input>
        </Link>

      </form>

      
    </div>
  )
}
