import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Modalss from "./Modalss";
import { useState } from "react";

function Cards(props) {
  const [showFlag, setShowFlag] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});

  const handleShow = (item) => {
    console.log(item);
    setClickedMovie(item);
    setShowFlag(true);
  };


  const handleclose = () => {
    setShowFlag(false);
  };

  const child2 =(child2)=>{
    props.handleChildDataChange(child2);

  }

  const DeleteReq = async () => {
   const response = await fetch(`${process.env.REACT_APP_URL}Delete/${props.favmovie.id}`, 
    {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const data2 = await response.json();
    child2(data2)

}

  return (
    <>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500${props.favmovie.poster_path}`}
          />
          <Card.Body>
            <Card.Title>Movie Name: {props.favmovie.title}</Card.Title>
            <hr></hr>
            <Card.Title>Comment: {props.favmovie.comment}</Card.Title>
          </Card.Body>
          <Button
            variant="success"
            onClick={() => {
              handleShow(props.favmovie);
            }}
          >
            UPDATE
          </Button>
          <Button variant="danger" onClick={DeleteReq}>
            DELETE
          </Button>
        </Card>
      </Col>
      <Modalss
        showFlag={showFlag}
        handleclose={handleclose}
        clicked={clickedMovie}
        child2={child2}
      />
    </>
  );
}

export default Cards;
