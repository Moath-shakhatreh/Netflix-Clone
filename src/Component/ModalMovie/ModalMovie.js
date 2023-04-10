import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalMovie(props) {
    let m = `https://image.tmdb.org/t/p/original//${props.movie.poster_path}`

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movie.title}</Modal.Title>
                </Modal.Header>
                <img src={m} alt={props.movie.title} /><br/>
                <Modal.Body>{props.movie.overview}</Modal.Body>
                <form>
                 <label>Comment<br/><input type="text"/></label>
                </form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}