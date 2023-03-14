import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ModalMovie from './ModalMovie';
import { useState } from 'react';
import React from 'react'
function Movie(props) {
    const [showFlag, setShowFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});
    const handleShow = (item) => {
        console.log(item);
        setClickedMovie(item);
        setShowFlag(true);
    }

    const handleclose = () => {
        setShowFlag(false);
    }

    return (
        <>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.favmovie.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{props.favmovie.title}</Card.Title>
                        <Button variant="primary" onClick={() => { handleShow(props.favmovie) }}>add to favorite </Button>
                    </Card.Body>
                </Card>
            </Col>
            <ModalMovie showFlag={showFlag} handleclose={handleclose} MovieData={clickedMovie} />
        </>)
}

export default Movie;