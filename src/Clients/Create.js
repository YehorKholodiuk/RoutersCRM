import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, {useState} from 'react';

const Create = (props) => {
    const [openModal,setOpenModal] = useState(false)
    const toggle = () => {
        setOpenModal(!openModal)
    }

    const [name,setName]=useState('')
    const [address,setAddress]=useState('')
    const [contactPhone,setContactPhone]=useState('')
    const [createdAt,setCreatedAt]=useState('')



    const setButtonHandler = () => {
        const newClient = {name,address,contactPhone,createdAt}
        props.addNewClient(newClient)
        toggle()
        setName('')
        setAddress('')
        setContactPhone('')
        setCreatedAt('')

    }
    return (

        <div>
            <button type="button" className="btn btn-secondary" onClick={toggle}>Add new client</button>
            <Modal isOpen={openModal} toggle={toggle} >
                <ModalHeader toggle={toggle}>New Client</ModalHeader>
                <ModalBody>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name}
                            onChange={(event)=>setName(event.target.value)}
                            />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Address</label>
                            <input type="text" class="form-control" id="exampleInputPassword1"
                                   value={address}
                                   onChange={(event)=>setAddress(event.target.value)}

                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                            <input type="number" className="form-control" id="exampleInputPassword1"
                                   value={contactPhone}
                                   onChange={(event)=>setContactPhone(event.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Created at</label>
                            <input type="date" className="form-control" id="exampleInputPassword1"
                                   value={createdAt}
                                   onChange={(event)=>setCreatedAt(event.target.value)}
                            />
                        </div>

                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={setButtonHandler}>Add Client</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Create;
