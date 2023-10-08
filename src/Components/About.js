import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function About() {
    const b = useNavigate();
    function clickHandler(){
        b("/labs");
    }
    function backHandler(){
        b(-1);
    }
  return (
    <div>
        <div>This is About Page</div>
        <br/>
        <button onClick={clickHandler}>Move to labs</button>
        <br/>
        <br/>
        <button onClick={backHandler}>Go Back</button>
    </div>
  )
}
