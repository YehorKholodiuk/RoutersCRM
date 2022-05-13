import React from 'react';
import {useState} from "react";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

const Update = (props) => {
    const [name,setName]=useState(props.current.name)
    const [address,setAddress]=useState(props.current.address)
    const [contactPhone,setContactPhone]=useState(props.current.contactPhone)
    const updateButtonHandler=()=> {




    }
    return (
        <div>
            <h2>Update data</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           value={name}
                           onChange={(event) => setName(event.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                           value={address}
                           onChange={(event) => setAddress(event.target.value)}

                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="exampleInputPassword1"
                           value={contactPhone}
                           onChange={(event) => setContactPhone(event.target.value)}
                    />
                </div>



            </form>

           <Link to={'/clients'}>
               <Button color="primary" onClick={updateButtonHandler}>Add Client</Button>{' '}
               <Button color="secondary" >Cancel</Button>
           </Link>
        </div>
    );
};

export default Update;
