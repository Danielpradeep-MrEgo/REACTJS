import React from "react";
import { useStateValue } from "./StateProvider";
// import "bootstrap/dist/css/bootstrap.css"
import "./Counter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function Counter() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="counter">
      <span><h4>{basket.length}</h4></span>    
      <FontAwesomeIcon className="font" icon={faCircle}/>
    </div>
  );
}

export default Counter;
