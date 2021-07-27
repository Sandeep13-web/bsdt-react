import React from 'react'
import './assets/header.css'
import logo from './assets/images/logo1.png';
import { NavLink } from 'react-router-dom'

function Header({logOut}) {
    return (
        <div>
            <div className="header">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <NavLink to="/"><img src={logo} className="img-fluid"></img></NavLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse d-flex" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                                <li class="nav-item px-3">
                                    <NavLink to="/" className="text-light text-decoration-none align-items-center" exact><p className="mb-0">Home</p></NavLink>
                                </li>
                                <li class="nav-item px-3">
                                    <NavLink to="/student-details" className="text-light text-decoration-none align-items-center" exact><p className="mb-0">Student Details</p></NavLink>
                                </li>
                                <li class="nav-item px-3">
                                    <NavLink to="/add-student" className="text-light text-decoration-none align-items-center" exact><p className="mb-0">Add a Student</p></NavLink>

                                </li>
                                <li class="nav-item dropdown px">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-people mx-1"></i>
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink to="/login" className="text-dark text-decoration-none align-items-center p-3" onClick={logOut}><h7 className="mb-0"><i class="fas fa-sign-in-alt pe-2"></i>Logout</h7></NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
