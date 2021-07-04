import React from 'react'
import Header from './header'
import Footer from './footer'

function Registration() {
    return (
        <div className="registration">
            <Header />
            <div className="content pb-5">
                <div className="container">
                    <div className="start pt-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#"><i class="bi bi-clipboard-check text-dark mx-1"></i></a></li>
                                <li class="breadcrumb-item active" aria-current="page">Add a Student</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="form-content">
                        <div className="title text-center mt-4">
                            <h2>Student Registration Form</h2>
                            <h7 className="text-muted">Fill out the form carefully for registration</h7>
                        </div>
                        <div className="form-area mt-3">
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Full Name</label>
                                    <input type="text" class="form-control"/>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputAddress" class="form-label">Address</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col-md-6">
                                    <label for="contact" class="form-label">Contact</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col-md-6">
                                    <label for="gender" class="form-label">Gender</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col-md-6">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" />
                                </div>
                                <div class="col-md-6">
                                    <label for="programme" class="form-label">Programme</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-outline-success">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Registration
