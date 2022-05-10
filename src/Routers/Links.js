import React from 'react';
import {Link} from "react-router-dom";

const Links = () => {
    return (
        <div>
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
        </div>
    );
};

export default Links;
