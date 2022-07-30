import React, { useState } from 'react';
import LikeButton from './button';

function BeerCard(props) {

  return (
    <li style={{ listStyle: "none", display: "flex", flexWrap: "wrap" }}>
      <h1>{props.name}</h1>
      <img
        style={{ height: "200px", width: "50px", padding: "20px" }}
        src={props.image_url}
      ></img>
      <button src=""></button>
      <span> Brewed Since - {props.brewed}</span>
      <h4>{props.tag}</h4>
      <p>{props.description}</p>
    </li>
  );
}

export default BeerCard;
