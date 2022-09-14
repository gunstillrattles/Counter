import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
const[letsSwap, setLetsSwap] = useState(false);
const a = "Good Bye!"
const b = <div className='secondElement'>second element</div>
const miniJSX = <h1>I am Grout!</h1>
const handleClick =()=> {
  setLetsSwap((prevSwap)=>!prevSwap);
}
const [count, setCount] = useState(0);
  return (
    <>
    <div>{a} React</div>
    <div>{letsSwap?b:miniJSX}</div>
    {letsSwap?miniJSX:b}
    {miniJSX}
    <button onClick = {handleClick}>swap</button>
    <div>
     <button class="button button2" onClick={() => setCount(count - 1)}>
       -
      </button>
     
			<pre id="inp"><h1> {count} </h1></pre>
			 <button class="button button2" onClick={() => setCount(count + 1)}>
       +
				
      </button>
    </div>
    </>
  );
}

export default App;
