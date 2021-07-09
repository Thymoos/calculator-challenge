import './App.css';
import Result from './components/Result';
import Button from './components/Button';

function App() {
  return (
    <>
    <h1>calc</h1>
    <p>Theme change</p>
    <Result/>
    <div className="buttons-container">
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button onClick={console.log("heyo")} type="button" buttonStyle="button--function">DEL</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>+</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>-</Button>
      <Button>.</Button>
      <Button>0</Button>
      <Button>/</Button>
      <Button>x</Button>
      <Button onClick={console.log("heyo")} type="button" buttonStyle="button--function" buttonSize="button--wide1">RESET</Button>
      <Button onClick={console.log("heyo")} type="button" buttonStyle="button--equals" buttonSize="button--wide2">=</Button>
    </div>
    </>
  );
}

export default App;
