import React from 'react'
import '../index';
import Header from './header';
import Footer from './footer';
import './assets/dashboard.css'

function Dashboard() {
    return (
        <div>
            <Header />
            <div className="content">
                <div className="container">
                    <div className="start pt-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#"><i class="bi bi-house text-dark mx-1"></i></a></li>
                                <li class="breadcrumb-item active" aria-current="page">Home</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="main-body pt-4">
                        <h1 className="">Welcome to S<span className="text-danger">.</span>I<span className="text-danger">.</span>S</h1>

                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Dashboard
