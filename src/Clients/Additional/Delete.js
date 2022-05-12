import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const Delete = (props) => {
    const {openModal,toggle} = props;
    const deleteButtonHandler = () =>{
        toggle()
        props.deleteObject(props.deletedItemId)
    }
    return (
        <div>

            <Modal isOpen={openModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Are you surely want to delete it?</ModalHeader>
                <ModalBody>
                    {props.deletedItem}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={deleteButtonHandler}>Delete</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Delete;
