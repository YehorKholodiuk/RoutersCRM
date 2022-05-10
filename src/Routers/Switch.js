import React from 'react';
import {Route, Routes} from "react-router-dom";
import ClientTable from "../Clients/ClientTable";
import Orders from "../Orders/Orders";
import Services from "../Services/Services";

const Switch = () => {
    return (
        <div>
            <Routes>
                <Route path="clients" element={<ClientTable/>} />
                <Route path="orders" element={<Orders/>} />
                <Route path="services" element={<Services/>} />

            </Routes>
        </div>
    );
};

export default Switch;
