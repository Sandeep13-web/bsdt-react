import React from 'react'
import '../index';
import Header from './header';
import Footer from './footer';
import './assets/dashboard.css'


function Detail() {
    return (
        <div>
            <Header />
            <div className="content pb-5">
                <div className="container">
                    <div className="start pt-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#"><i class="bi bi-person text-dark mx-1"></i></a></li>
                                <li class="breadcrumb-item active" aria-current="page">Student Details</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="details-content">
                        <div className="title mt-4">
                            <h2>Student Details</h2>
                        </div>
                        <div className="student-card mt-4">
                            <div className="row">
                                <div className="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Student Name : </h5>
                                            <h6 className="card-title">Address : </h6>
                                            <h6 className="card-title">Contact : </h6>
                                            <h6 className="card-title">Gender : </h6>
                                            <h6 className="card-title">Email : </h6>
                                            <h6 className="card-title">Programme : </h6>
                                            <div className="buttons d-flex justify-content-between mt-4">
                                                <button className="btn btn-outline-primary">Edit</button>
                                                <button className="btn btn-outline-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Detail
