import React from "react";
import { useNavigate } from "react-router-dom";


function Home() {
    const c = useNavigate();
    function clickHandler() {
        // go to about page
        c("/about")
    }
  return (
    <div>
      <div>This is Home Page</div>
      <br/>
      <br/>
      <button onClick={clickHandler}>
        Move to about
      </button>
    </div>
  );
}

export default Home;
