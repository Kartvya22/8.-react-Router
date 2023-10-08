import React from 'react'
import { useNavigate } from 'react-router-dom';

const Labs = () => {
    const navigate = useNavigate();
    function clickHandler(){
        // go to support page
        navigate("/support");
    }
    function backHandler(){
        navigate(-1);
    }
  return (
    <div>
        <div>This is Labs Page</div>
        <br/>
        <br/>
        <button onClick={clickHandler}>Move to Support</button>
        <br/>
        <br/>
        <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default Labs;