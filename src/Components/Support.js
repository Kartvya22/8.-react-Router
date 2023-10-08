import React from 'react'
import { useNavigate } from 'react-router-dom';

const Support = () => {
    const a = useNavigate();
    function clickHandler(){
        // mobe to about page
        a("/about");
    }
    function backHandler(){
        a(-1);
    }
  return (
    <div>
        <div>This is Support Page</div>
        <br/>
        <br/>
        <button onClick={clickHandler}>
            Move to about
        </button>
        <br/>
        <br/>
        <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default Support