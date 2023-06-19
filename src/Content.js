import React from 'react';
import './Content.css';
import { useState } from 'react';


const Content = () => {
    // function handlenamesChange() {
    //     const names = ["Earn", "Grow", "Give"];
    //     const int = Math.floor(Math.random() * 3);
    //     return names[int];
    // }


    const [count2, updatecount] = useState(()=>1);

    function increment() {
        updatecount(count2 + 1)
    }
    function decrement() {
        updatecount(count2 - 1);
    }
    // const namee=()=>{
    //     return console.log("visit mdsalman.com");
    // }
    // const [name,setname]=useState(()=>namee())
    const [count, setCount] = useState(99)
    function incrementFunction() {
        setCount((preCount) => { return preCount + 1 });
    }
    function decrementFunction() {
        setCount((preCount) => { return preCount - 1 });
    }
    function handleClick(e) {
        console.log(e.target.innerText);
    }
    return (
        <div>
            <button onClick={() => decrement()}>--</button>
            <span>{count2}</span>
            <button onClick={() => increment()}>++</button>
            <p>  Lets Earn Money</p> <br />
            <button onClick={(e) => handleClick(e)}> Click </button>
            <button onClick={() => decrementFunction()}>-</button>
            <span>{count}</span>
            <button onClick={() => incrementFunction()}>+</button>
        </div>

    )
}

export default Content