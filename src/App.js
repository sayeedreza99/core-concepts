import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const naoyok = ['razzak', 'bappi', 'jobbar', 'rafiq'];
  const activity = ['eat', 'sleep', 'work', 'read'];
  const products = [
    { name: 'Photoshop', price: '$2000' },
    { name: 'Illustrator', price: '$3000' },
    { name: 'PDF Reader', price: '$450' },
    { name: 'Premier Element', price: '$460' }

  ]
  return (
    <div className="App" >
      <header className="App-header">
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            naoyok.map(naok => <li>{naok}</li>)
          }
          {
            products.map(n => <li>{n.name}</li>)
          }
          {
            products.map(pd => <Product product={pd}></Product>)
          }
        </ul>
      </header>
    </div >
  );
  function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrease = () => setCount(count + 1);
    return (
      <div>
        <h1>Count: {count} </h1>
        <button onMouseOver={() => setCount(count - 1)}>Decrease</button>
        <button onMouseMove={handleIncrease}>Increase</button>
      </div>
    )
  }
  function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
      <div>
        <h3>Dynamic Users:{users.length}</h3>
        {
          console.log(users)
        }
        <ul>
          {
            users.map(n => <li> {n.phone} </li>)
          }
        </ul>
      </div>
    )
  }

  function Product(props) {
    const { name, price } = props.product;
    console.log(name, price)
    const productStyle = {
      border: '1px solid gray',
      borderRadius: '5px',
      backgroundColor: "lightgray",
      height: '200px',
      width: '300px',
      // float: 'left'
    }
    console.log(props)
    return (
      <div style={productStyle}>
        <h3>{name} </h3>
        <h5>{price}</h5>
        <button>Buy Now</button>

      </div>
    )
  }
  function Person(props) {
    const style = { border: '2px solid red', padding: '5px', margin: '10px', width: '800px' }

    return <div style={style}>
      <h1>Name: {props.name}</h1>
      <p>Activity: {props.Activity}</p>
    </div>
  }
}

export default App;
