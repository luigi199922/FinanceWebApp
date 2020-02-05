import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => { 

        return(
        
            <nav className="Navbar navbar navbar-expand-md navbar-dark bg-dark  container-fluid">     
                <h2 className="navbar-brand"><NavLink style={{color: "white"}} to="">Finance - API</NavLink></h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-2">
                        <li className="nav-item active">
                            <NavLink style={{color: "white"}} to="/options">Options</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink style={{color: "white"}} to="/stocks">Stocks</NavLink>
                        </li>
                    </ul>
                 </div>
            </nav>
        )
    
}
export default Navbar