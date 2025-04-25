import { useState } from "react";
import './App.css'

function App(){
  const [name1,setName1]= useState('');
  const [name2,setName2]= useState('');
  const [result,setResult]= useState('');

  const calculatelove=()=>{
    if(!name1 || !name2){
      alert("Please enter both names.")
      return;

    }
    const percentage =Math.floor(Math.random()*100)+1;
    setResult(`Love between ${name1} and ${name2} is ${percentage}%`);
  };
  return(
    <div>
      <h1>Love Calculator</h1>
      <input type="text"
      placeholder="Name 1"
      value={name1}
      onChange={(e)=>setName1(e.target.value)} />
      <br />
      <input type="text"
      placeholder="Name 1"
      value={name2}
      onChange={(e)=>setName2(e.target.value)} />
      <br />

      <button onClick={calculatelove}>Calculate</button>

      <h2>{result}</h2>
    </div>
    
    
  )
};
export default App;