import React from 'react';
import ClientItem from "./ClientItem";

const ClientTable = (props) => {
    let serialNumber = 1;
    return (
        <div>
            <h2>Clients</h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {props.clients.map(el => <ClientItem serialNumber={serialNumber++}client={el}/>)}
                </tbody>
            </table>


        </div>
    );
};

export default ClientTable;
