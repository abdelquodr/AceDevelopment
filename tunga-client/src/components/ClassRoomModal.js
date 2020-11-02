import React from 'react';
import { Link } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'

const ClassRoomModal = (props) => {

    return (

        <>
            <Modal
                style={{
                    fontFamily: 'Quicksand',
                }}
                {...props}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="font-weight-bold text-center"  > Join Live Class</Modal.Title>
                </Modal.Header>
                <Modal.Body className="py-1 ">
                    Join live session with the world renowned expert in the technology space to
                    learn to fasten and level-up on your development journey.
                    <p className="text-sm pt-3"><span >This service is for premium members</span> </p>
                </Modal.Body>
                <Modal.Footer className="pt-1">
                    <Button variant="secondary" onClick={props.onHide}>
                        Cancel
                    </Button>
                    <Link to='/ace-dev/classroom/:id'>
                        <Button variant="primary" style={{ backgroundColor: '#172b4d' }}>Enter</Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ClassRoomModal;
