
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
    <div className='container' >
   <h1>Accounting</h1>






      <Links/>
      <Switch/>
    </div>
  );
}

export default App;

