import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [{name:'photoshop',price:'$90.99'},
  {name:'Illustrator',price:'$60.99'},
  {name:'pdf reader',price:'$6.99'}]
 

  const nayoks = ['anwar','jafar','salman','shyvo','rawnak hasan']
  const productNames = products.map(product => product)
  const nayokNames = nayoks.map(nayok=> nayok);
  console.log(nayokNames);
  console.log(productNames);
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        <p>My first react paragraph</p>
        
        </p>
        <Counter></Counter>
        <Users></Users>
        <Product product= {products[0]} ></Product>
        {/* <Product name= {products[1].name} price={products[1].price}></Product>
        <Product name= {products[2].name} price={products[2].price}></Product> */}
        {/* <Person name="Rubel nayok"></Person>
        <Person name="jashim"></Person> */}
        <Person></Person>
        <ul>
           {
           nayoks.map(nayok => <li>{nayok}</li> )}
           {
             products.map(product=> <li>{product.name}</li> )
           }
           {
             products.map(product => <Product product={product}></Product>)
           }
           <li>{nayoks[0]}</li>
           <li>{nayoks[1]}</li>
           <li>{nayoks[2]}</li>
       </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function Counter(){
  const [count,setCount] = useState(10);
  const handleIncrease = () => {
     setCount(count+1);
  };
  return (
  <div>
  <h1>count:{count}</h1>
  <button onClick={handleIncrease}>Increase</button>
  <button onClick ={() => setCount(count-1)}>Decrease</button>
  </div>
  )
}
function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic person: {users.length}</h3>
     <ul>
       {
         users.map(user => <li>{user.name}</li> )
       }
     </ul>
    </div>
  )
}
function Person(props){
  return <div style={{border:'2px solid red', margin:'10px' }}>
    <h1>Name: {props.name}</h1>
    <h3>Hero of Bangladesh</h3>
  </div>
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'gray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  return(
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h1>{props.product.price}</h1>
      <button>Buy now</button>

    </div>
  )
}


export default App;
