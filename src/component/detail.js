import React, { useState, useEffect } from 'react'
import '../index';
import Footer from './footer';
import StudentCard from './studentCard';
import './assets/dashboard.css'
import './assets/details.css'
import firebase from './util/firebase'
import { Modal } from 'react-bootstrap'


function Detail() {

    const [studentList, setStudentList] = useState();
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [uStudent, setUStudent] = useState({})
    const [uName, setUName] = useState('')
    const [uAddress, setUAddress] = useState('')
    const [uContact, setUContact] = useState('')
    const [uGender, setUGender] = useState('')
    const [uEmail, setUEmail] = useState('')
    const [uProgramme, setUProgramme] = useState('')

    const editStudent = (studentDetail) => {
        setShow(true);
        setUStudent(studentDetail);
        setUName(studentDetail.name);
        setUAddress(studentDetail.address);
        setUContact(studentDetail.contact);
        setUGender(studentDetail.gender);
        setUEmail(studentDetail.email)
        setUProgramme(studentDetail.programme);
    }

    const updateStudent = (id) => {
        const studentRef = firebase.database().ref("studentDetail").child(id);
        setShow(false);
        studentRef.update({
            name: uName,
            address: uAddress,
            contact: uContact,
            gender: uGender,
            email: uEmail,
            programme: uProgramme
        })
        console.log(studentRef);
    }

    const nameHandler = (e) => {
        console.log(e.target.value);
    }

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
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} className="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-content shadow pt-2 pe-3 ps-3 pb-4">
                        <div className="title text-center mt-4 pb-4">
                            <h2>Update Student Information</h2>
                        </div>
                        <div className="form-area">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" value={uName} onChange={(e) => setUName(e.target.value)} />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputAddress" class="form-label">Address</label>
                                    <input type="text" class="form-control" value={uAddress} onChange={(e) => setUAddress(e.target.value)} />
                                </div>
                                <div class="col-md-6">
                                    <label for="contact" class="form-label">Contact</label>
                                    <input type="text" class="form-control" value={uContact} onChange={(e) => setUContact(e.target.value)} />
                                </div>
                                <div class="col-md-6">
                                    <label for="gender" class="form-label">Gender</label>
                                    <input type="text" class="form-control" value={uGender} onChange={(e) => setUGender(e.target.value)} />
                                </div>
                                <div class="col-md-6">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" value={uEmail} onChange={(e) => setUEmail(e.target.value)} />
                                </div>
                                <div class="col-md-6">
                                    <label for="programme" class="form-label">Programme</label>
                                    <input type="text" class="form-control" value={uProgramme} onChange={(e) => setUProgramme(e.target.value)} />
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-outline-success" onClick={updateStudent.bind(null, uStudent.id)} >Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
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
                                        <StudentCard student={student} editStudent={editStudent} />
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
