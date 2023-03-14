import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
function ModalMovie(props) {
    const fetchRes = async () => {
        await fetch('https://movies-library-lilac.vercel.app/addFav', {
            method: 'POST',
            body: JSON.stringify({
                // Add parameters here
                title: props.MovieData.title,
                poster_path: props.MovieData.poster_path,
                overview: props.MovieData.overview,
                comment: addComment
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

    const [addComment, setaddComment] = useState('');
    function handleComment(e){
        setaddComment(e.target.value)
    }

    return (

        <Modal show={props.showFlag} onHide={props.handleclose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.MovieData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={`https://image.tmdb.org/t/p/w500${props.MovieData.poster_path}`} width='100%'></Image>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>comment</Form.Label>
                    <Form.Control as="textarea" onChange={handleComment} rows={3} />
                </Form.Group>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleclose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => { 
                    alert('Movie added to DataBase');
                    fetchRes();

                }}>
                    add to favorite
                </Button>
            </Modal.Footer>
        </Modal>
    )





}

export default ModalMovie;