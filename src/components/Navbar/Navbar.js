import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => { 

        return(
        
            <nav className="Navbar navbar navbar-expand-md navbar-dark bg-dark container-fluid">     
                <h2 className="navbar-brand"><NavLink style={{color: "white"}} to="">Finance - API</NavLink></h2>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <NavLink style={{color: "white"}} to="/option">Options</NavLink>
                        </li>
                    </ul>
                 </div>
            </nav>
        )
    
}
export default Navbar