import React from 'react'
import '../index';
import Footer from './footer';
import './assets/dashboard.css'
import DashboardBg from './assets/images/dashboard-bg.jpg'
import DashboardBg1 from './assets/images/dashboard-bg1.jpg'
import DashboardBg2 from './assets/images/dashboard-bg2.jpg'


function Dashboard() {
    return (
        <div>
            <div className="content">
                <div className="container">
                    <div className="start pt-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#"><i class="bi bi-house-door-fill text-dark mx-1"></i></a></li>
                                <li class="breadcrumb-item active" aria-current="page">Home</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="main-body pt-4 shadow p-4 mb-3">
                        <h1 className="">Welcome to S<span className="text-danger">.</span>I<span className="text-danger">.</span>S</h1>
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={DashboardBg} class="d-block w-100 h-70 img-fluid" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={DashboardBg1} class="d-block w-100 h-70 img-fluid" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={DashboardBg2} class="d-block w-100 h-70 img-fluid" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />

                    </div>
                    )
}

                    export default Dashboard
