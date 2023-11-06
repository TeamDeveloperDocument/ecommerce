import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useHistory, useParams } from "react-router";

export function Display({ content }) {
  const { id } = useParams();
  const item = content.find((ele) => ele.id === id);
  let history = useHistory();
  return (
    <>
      <div className="display container">
        <button className="back" onClick={() => history.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" /> Back
        </button>
        <img src={item.img} alt={item.title} />
        <h1>{item.title}</h1>
        <h2>Description :</h2>
        <p>{item.description}</p>
        <h2>Procedure :</h2>
        <p>{item.procedure}</p>
        <h2>Ingredients :</h2>
        <ul>
          {item.ingredients.map((ele) => (
            <li>{ele}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
