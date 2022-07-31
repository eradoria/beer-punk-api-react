import React, { useState } from "react";
import LikeButton from "./button";

function BeerCard(props) {
  const [isClicked, setIsClicked] = useState(true);
  const handleClick = () => {
    let label = setIsClicked === true ? false : true;
  };

  return (
    <li style={{ listStyle: "none", display: "flex", flexWrap: "wrap" }}>
      <h1>{props.name}</h1>
      <img
        style={{ height: "200px", width: "50px", padding: "20px" }}
        src={props.image_url}
      ></img>
      {/* <button
        onClick={() => {
          isClicked ? setIsClicked(true) : setIsClicked(false);
        }}
        className={"like"}
      >
        Like
      </button> */}
      
      <LikeButton />

      <span> Brewed Since - {props.brewed}</span>
      <h4>{props.tag}</h4>
      <p>{props.description}</p>
    </li>
  );
}

export default BeerCard;
