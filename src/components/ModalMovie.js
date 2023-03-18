import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import { useState } from "react";
function ModalMovie(props) {
    const [addComment, setaddComment] = useState("");
    function handleComment(e) {
      setaddComment(e.target.value);
    }
   

     const fetchRes = async () => {
        // let editObj={
        //     title: props.MovieData.title.replaceAll("'",""),
        //     poster_path: props.MovieData.poster_path.replaceAll("'",""),
        //     overview: props.MovieData.overview.replaceAll("'",""),
        //     comment: addComment.replaceAll("'","")
        // }    
        // await axios.post(`${process.env.REACT_APP_URL}addFav`,editObj)
 
        let editObj={
            title: props.MovieData.title.replaceAll("'",""),
            poster_path: props.MovieData.poster_path.replaceAll("'",""),
            overview: props.MovieData.overview.replaceAll("'",""),
            comment: addComment.replaceAll("'","")
        }  

    await fetch(`${process.env.REACT_APP_URL}addFav`, {
      method: "POST",
      body: JSON.stringify(
        editObj
      ),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });



  };

  return (
    <Modal size="lg" show={props.showFlag} onHide={props.handleclose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.MovieData.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{display:"flex",gap:"10px"}}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${props.MovieData.poster_path}`}
          width="100%" 
          style={{height:"25rem",width:"18rem"}}
        ></Image>
        <div>
        <h3>overview:</h3>
        <p>{props.MovieData.overview}</p>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>comment</Form.Label>
          <Form.Control as="textarea" onChange={handleComment} rows={3} />
        </Form.Group>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleclose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            alert("Movie added to DataBase");
            props.handleclose();
            fetchRes();
          }}
        >
          add to favorite
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMovie;
