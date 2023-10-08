import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();
    function backHandler(){
        navigate(-1);
    }

  return (
    <div>
      <div>This is Not Found Page</div>
      <br />
      <br />
      <button onClick={backHandler}>Go Back</button>
    </div>
  );
};
