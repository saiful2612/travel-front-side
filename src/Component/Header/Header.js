import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Header.css';


const Header = () => {

    const{user, logout}= useAuth();

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg p-2 nav-style">
                <div className="container-fluid nav-element-body">
                    <Link className="navbar-brand medicare text-danger" to="/home">TravelHunt</Link>

                    <button className="navbar-toggler nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" area-expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon nav-icon"></span>Menu

                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto nav-element">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            <Link className="nav-link" to="/order">My Order</Link>
                            <Link className="nav-link" to="/alluser">All User</Link>
                            <Link className="nav-link" to="/adduser">Add User</Link>
                            <Link style={{fontWeight:600, color:'white'}} className="nav-link text-success" to="/home">{user.displayName}</Link>
                            {!user.email ?<Link className="nav-link" to="/login">Login</Link>
                            :<button onClick={logout} className="btn btn-danger">Log Out</button>}

                        </div>
                    </div>
                </div>
            </nav>

            
        </div>
    );
};

export default Header;