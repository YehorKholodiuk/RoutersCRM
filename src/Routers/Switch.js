import React from 'react';
import {Route, Routes} from "react-router-dom";
import ClientTable from "../Clients/ClientTable";
import Orders from "../Orders/Orders";
import Services from "../Services/Services";
import Update from "../Clients/Update";

const Switch = (props) => {
    return (
        <div>
            <Routes>
                <Route path="clients" element={<ClientTable clients={props.clients} addNewClient={props.addNewClient} deleteClient={props.deleteClient} setCurrent={props.setCurrent}/>} />
                <Route path="orders" element={<Orders/>} />
                <Route path="services" element={<Services/>} />
                <Route path="clients/update" element={<Update current={props.current}/>} />

            </Routes>
        </div>
    );
};

export default Switch;
