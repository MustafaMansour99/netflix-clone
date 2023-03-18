import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

function Modalss(props) {
  const fetchRes = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_URL}favMovies/${props.clicked.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          comment: e.target.comment.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data2 = await response.json();
    console.log(e.target.comment.value);
    props.child2(data2);
    props.handleclose();
  };

  // const [addComment, setaddComment] = useState('');

  // function handleComment(e){
  //     setaddComment(e.target.value)
  // }
  //      const [childData, setChildData] = useState("");

  //   const handleInputChange = (event) => {
  //     setChildData(event.target.value);
  //     props.onChildDataChange(event.target.value);

  return (
    <>
      <Modal size="lg" show={props.showFlag} onHide={props.handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.clicked.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", gap: "10px" }}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${props.clicked.poster_path}`}
            width="100%"
            style={{height:"25rem",width:"18rem"}}

          ></Image>
          <div>
            <h3>overview:</h3>
            <p>{props.clicked.overview}</p>

            <Form onSubmit={fetchRes}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>comment</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  name="comment"
                  defaultValue={props.clicked.comment}
                  rows={3}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
              save change comment
              </Button>
              <Button variant="secondary" onClick={props.handleclose}>
                Close
              </Button>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalss;
