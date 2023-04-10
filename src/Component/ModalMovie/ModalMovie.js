import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';

export default function ModalMovie(props) {
    let m = `https://image.tmdb.org/t/p/original//${props.movie.poster_path}`
 
 
    function submitHandler(e) {
        e.preventDefault();
        let userComment = commentRef.current.value;
        console.log(userComment)
        let newMovie = { ...props.movie, userComment }
        props.commentHandler(newMovie, newMovie.id);
    }



    async function addToFavHandler(e){
        e.preventDefault();
      
        let url =`${process.env.REACT_APP_SERVER_URL}/addMovies`;
        
        let data={
            name: props.movie.title, 
            comments : m,
        }
        const response = await fetch (url,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
      
        const receivedData = await response.json();
        console.log(1111,receivedData)
      
        if (response.status ===201){
          alert("successfully added to database")
        }
      
      
    }

    //   let result={
    //     name: props.movie.title,
    //     sourceUrl : m,
    //     comments : props.movie.release_data,
    //     comment : props.movie.comment
    //   }


    const commentRef = useRef()


    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movie.title}</Modal.Title>
                </Modal.Header>
                <img src={m} alt={props.movie.title} /><br />
                <Modal.Body>{props.movie.overview}
                    <br /><br />
                    {(props.movie.comment) ? (props.movie.comment) : "No comment Added "}
                    <br />
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment:</Form.Label>
                            <Form.Control ref={commentRef} type="text" placeholder="Enter your comment" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e) => submitHandler(e)}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={(e) =>addToFavHandler(e)}>
                        add to fav
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}