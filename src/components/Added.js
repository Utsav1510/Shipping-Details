import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Cricketers from './Cricketers';
import './added.css';


export default function Added() {
  let history=useNavigate();
  history('/');
  const handleSubmit = (e) => {
    e.preventDefalut();
  }
  

 

  return (
    <div className='background'>
    <h1>All details</h1>
    <div className='tablecard'>
      <table>
        <thead>
          <tr>
            <th>Name </th>
            <th>Contact</th>
            <th> Address</th>
          </tr>

        </thead>
        <tbody>
          {
            Cricketers.map((item)=>{
              return(
                <tr >
                  <td>{item.a}</td>
                  <td>{item.b}</td>
                  <td>{item.c}</td>

                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
      <Link to='/'>
          <button className='btn' type="Back" onClick={handleSubmit}>Go Back </button>
        </Link>
      </div>

    </div>
  )
}

