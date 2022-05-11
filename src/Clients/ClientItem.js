import React from 'react';

const ClientItem = (props) => {
    const{name,address,contactPhone,createdAt} =props.client;
    return (

            <tr>
                <th scope="row">{props.serialNumber}</th>
                <td>{name}</td>
                <td>{address}</td>
                <td>{contactPhone}</td>
                <td>{createdAt}</td>
                <td><button>Update</button></td>
            </tr>

    );
};

export default ClientItem;
