import './App.css';
import Switch from "./Routers/Switch";
import {Routes, Route, Link, Router} from "react-router-dom";
import Links from "./Routers/Links";
import {v4 as uuidv4} from 'uuid';
import ClientTable from "./Clients/ClientTable";
import Orders from "./Orders/Orders";
import Services from "./Services/Services";
import 'bootstrap/dist/css/bootstrap.css'
import {useState} from "react";

const initialClients = [
    {id: uuidv4(), name: 'Smith', address: 'New York', contactPhone: '3343443-545-44-8', createdAt: '23.04.2021'},
    {id: uuidv4(), name: 'Robert', address: 'New Jersey', contactPhone: '33433-545-44-8', createdAt: '28.04.2021'},
    {id: uuidv4(), name: 'Depp', address: 'New Orlean', contactPhone: '334843-545-44-8', createdAt: '01.04.2021'}
]

function App() {
    const [clients, setClients] = useState(initialClients)
    const addNewClient = (newClient) => {
        setClients([...clients, {...newClient}])
    }

    const deleteClient = (id) => {
        const newClients = clients.filter(el => el.id !== id)
        setClients(newClients)
    }


    const [current, setCurrent] = useState({ })
    return (
        <div className='container'>
            <h1>Accounting</h1>


            <Links/>
            <Switch clients={clients} addNewClient={addNewClient} deleteClient={deleteClient}
            current={current} setCurrent={setCurrent}

            />
        </div>
    );
}

export default App;

