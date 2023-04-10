import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import ModalMovie from '../ModalMovie/ModalMovie';


export default function Movie(props) {
    const [show,setShow] = useState(false) ;
    const handleClose = ()=>{setShow(false)};
    const handleShow = ()=>{setShow(true)};
    let m = `https://image.tmdb.org/t/p/original//${props.movie.poster_path}`
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={m} />
                <Card.Body>
                    <Card.Title>{props.movie.title}</Card.Title>
                    <Card.Text>
                        {props.movie.release_data}
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>add to favourite</Button>
                </Card.Body>
            </Card>

            <ModalMovie show={show} movie={props.movie} handleClose={handleClose} />
        </>
        
    )
}



// https://image.tmdb.org/t/p/original//t6HIqrRAclMCA60NsSmeqe9RmNV.jpg
///    /t6HIqrRAclMCA60NsSmeqe9RmNV.jpg