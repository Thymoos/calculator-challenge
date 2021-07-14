import React, { useState } from 'react';
import './App.css';
import Result from './components/Result';
import Button from './components/Button';

function App() {

  const [count, setCount] = useState([]);
  const [equation, setEquation] = useState([]);
  const [flag, setFlag] = useState(false);
  const [banner, setBanner] = useState(false);
  const [block, setBlock] = useState(false);
  
  const handleNumber = (e) =>{
    const value = e.target.innerHTML;

    if(banner){
      setEquation([...equation, {
        id: equation.length,
        value: value
      }]);
      setCount([{
        id: count.length,
        value: value
      }]);
      setBanner(false);
    }

    else if(flag===true){
      setCount([{
        id: count.length,
        value: value
      }])

      setEquation([{
        id: equation.length,
        value: value
      }]);

      setFlag(false);
    }
    else{

   setCount([...count, {
     id: count.length,
     value: value
   }]);
   setEquation([...equation, {
     id: equation.length,
     value: value
   }]);
  }
  setBlock(false);
  }
  
  const handleType = (e) =>{
    if(block===false){

    let value = "";
    
    if(e.target.innerHTML === "x") value = "*"
    else value = e.target.innerHTML;

    if(flag){
      setEquation([...count, {
        id:equation.length,
        value: value
      }]);

      setFlag(false);
    }else{

    setCount([]);
    setEquation([...equation, {
      id:equation.length,
      value: value
    }]);
  }
  setBlock(true);
  }
}
  
  const handleReset = () =>{
    setCount([]);
    setEquation([]);
    
    setFlag(false);
    setBanner(false);
    setBlock(false);
  }
  
  const handleDelete = () =>{
    const idCount =  count.findIndex( item => item.id === count.length-1 );
    const idEquation = equation.length - 1;
    
    if(count.length !== 0){
    setCount(prevCount => prevCount.filter((count, i) => i !== idCount));
    setEquation(prevEquation => prevEquation.filter((equation, i) => i !== idEquation));
    }
  }
  
  const handleEquals = () =>{
   const result_arr = equation.map(number => number.value);
   const result = eval(result_arr.join(''));

  //  I'm aware of the dangers related to using "eval()"
  //  but for the sake of my mental stability I'll stick to it

    setCount([{
      id: count.length,
      value: result
    }]);
    setEquation([]);

    setFlag(true);
    setBanner(true);
    setBlock(false);
  }

  return (
    <div className="main-wrapper">
    <h1>calc</h1>
    <Result count={count}/>
    <div className="buttons-container">
      <Button onClick={handleNumber}>7</Button>
      <Button onClick={handleNumber}>8</Button>
      <Button onClick={handleNumber}>9</Button>
      <Button onClick={handleDelete} buttonStyle="button--function">DEL</Button>
      <Button onClick={handleNumber}>4</Button>
      <Button onClick={handleNumber}>5</Button>
      <Button onClick={handleNumber}>6</Button>
      <Button onClick={handleType}>+</Button>
      <Button onClick={handleNumber}>1</Button>
      <Button onClick={handleNumber}>2</Button>
      <Button onClick={handleNumber}>3</Button>
      <Button onClick={handleType}>-</Button>
      <Button onClick={handleNumber}>.</Button>
      <Button onClick={handleNumber}>0</Button>
      <Button onClick={handleType}>/</Button>
      <Button onClick={handleType}>x</Button>
      <Button onClick={handleReset} buttonStyle="button--function" buttonSize="button--wide1">RESET</Button>
      <Button onClick={handleEquals} buttonStyle="button--equals" buttonSize="button--wide2">=</Button>
    </div>
    </div>
  );
}

export default App;
