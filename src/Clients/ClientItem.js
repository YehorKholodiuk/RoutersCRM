import React from 'react';
import KebabMenu from "./Additional/KebabMenu";


const ClientItem = (props) => {
    const{name,address,contactPhone,createdAt, id} = props.client;
    return (

            <tr>
                <th scope="row">{props.serialNumber}</th>
                <td>{name}</td>
                <td>{address}</td>
                <td>{contactPhone}</td>
                <td>{createdAt}</td>
                <td><KebabMenu deletedItem={name} deletedItemId={id} deleteClient={props.deleteClient}  setCurrent={props.setCurrent}  updatedData={props.client}/></td>
            </tr>

    );
};

export default ClientItem;
