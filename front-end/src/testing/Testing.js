import React from "react";

import "./Testing.css";

export default function Testing() {


    
    return (
        <>
        <body>  
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center justify-content-lg-between">
                    <h1 class="logo me-auto me-lg-0">GP</h1>
                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                <a class="nav-link scrollto active" href="hero">Home</a>
                            </li>
                            <li>
                                <a class="nav-link scrollto" href="about">About</a>
                            </li>
                            <li>
                                <a class="nav-link scrollto" href="services">Services</a>
                            </li>
                            <li>
                                <a class="nav-link scrollto" href="portfolio">Port</a>
                            </li>
                            <li>
                                <a class="nav-link scrollto" href="#contact">Contact</a>
                            </li>
                        </ul> 
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </body>  
        </>
    );
}