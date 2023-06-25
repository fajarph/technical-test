import React from "react";
import "./style.css"
import Logo from "./img/Logo.png"

const Navbar = () => {
    return(
        <div>
            <div className="container-fluid">
                <nav class="navbar navbar-expand-lg style-navbar">
                    <div class="container mt-5">
                        <a class="navbar-brand" href="#">
                            <img className="Logo" src={Logo} alt="Bootstrap" width="30" height="24" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link style-navbar fw-bold" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link style-navbar fw-bold" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link style-navbar fw-bold" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button type="button" class="btn btn-warning me-3 mb-4 color-text">Register</button>
                        </div>
                        <div>       
                            <button type="button" class="btn btn-warning mb-4 color-text">Login</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar