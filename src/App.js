
import './App.css';
import Switch from "./Routers/Switch";
import {Routes, Route, Link, Router} from "react-router-dom";
import Links from "./Routers/Links";

import ClientTable from "./Clients/ClientTable";
import Orders from "./Orders/Orders";
import Services from "./Services/Services";
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <div >
   <h1>Accounting</h1>

        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page"to="/clients" >Clients</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/orders" >Orders</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/services" >Services</Link>
            </li>

        </ul>
            <nav>
                <Link to ="/clients">Clients</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/services">Services</Link>

            </nav>

            <Routes>
                <Route path="clients" element={<ClientTable/>} />
                <Route path="orders" element={<Orders/>} />
                <Route path="services" element={<Services/>} />

            </Routes>


      <Links/>
      <Switch/>
    </div>
  );
}

export default App;

