import { React, useState } from 'react'


const Countapp = () => {
    const [counter, setCounter] = useState(0);
    const [savedCounts, setSavedCounts] = useState([]);
    

    const minus5 = () => {
      setCounter(count => count - 5);
    };

     const minus1 = () => {
      setCounter(count => count - 1);
    };

    const reset = () =>{
      setCounter(0)
    }
  const saveCount = () => {
    setSavedCounts([...savedCounts, counter]);
    console.log(counter);
    reset();
  };
    const plus1 = () => {
    setCounter(count => count + 1);
  };

    const plus5 = () => {
    setCounter(count => count + 5);
          };
 
  return(
  <div className="counter">
  <h1>Counter</h1>
  <span className="counterOutput">{counter}</span>
  <div className="btnContainer">
    <button className="negativeFiveBtn" onClick={minus5}>-5</button>
    <button className="negativeOneBtn" onClick={minus1}>-1</button>
    <button className="resetBtn" onClick={reset}>Reset</button>
    <button className="saveBtn" onClick={saveCount}>Save</button>
    <button className="plusOneBtn" onClick={plus1}>+1</button>
    <button className="plusFiveBtn" onClick={plus5}>+5</button>
  </div>

  <div className='history'>
  <ul className='historyList'>
      {savedCounts.map((saveCount,index) => (
        <li key={index}>{saveCount}</li>
      ))}
    </ul>
  </div>
</div>
);

}


export default Countapp;