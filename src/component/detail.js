import React, { useState, useEffect } from 'react'
import '../index';
import Header from './header';
import Footer from './footer';
import StudentCard from './studentCard';
import './assets/dashboard.css'
import './assets/details.css'
import firebase from './util/firebase'


function Detail() {

    const [studentList, setStudentList] = useState();

    useEffect(() => {
        const studentRef = firebase.database().ref("studentDetail");
        studentRef.on("value", (student) => {
            const students = student.val();
            const studentList = []
            for (let id in students) {
                studentList.push({ id, ...students[id] })
            }
            setStudentList(studentList);
        })
    }, [])



    return (
        <div>
            <Header />
            <div className="content pb-5">
                <div className="container">
                    <div className="start pt-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#" className="text-dark"><i class="fas fa-user-friends"></i></a></li>
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
                                {studentList ? studentList.map((student, index) => (
                                    <div className="col-lg-4 col-md-6" key={index}>
                                        <StudentCard student={student} />
                                    </div>

                                )) : ''}
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
