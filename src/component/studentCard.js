import firebase from './util/firebase'
import React from 'react'
import './assets/details.css'

function StudentCard({ student }) {
    const deleteStudent = (id) => {
        const studentRef = firebase.database().ref("studentDetail").child(student.id);
        studentRef.remove();
    }
    const editStudent = () => {
        console.log('editing');
    }
    return (
        <div>
            <div class="card shadow mb-3">
                <div class="card-body">
                    <div className="upper-text">
                        <h5 class="card-title">Student Name : {student.name} </h5>
                        <h6 className="card-title">Address : {student.address} </h6>
                        <h6 className="card-title">Contact : {student.contact} </h6>
                        <h6 className="card-title">Gender : {student.gender}</h6>
                        <h6 className="card-title">Email : {student.email}</h6>
                        <h6 className="card-title">Programme :{student.programme}</h6>
                    </div>
                    <div className="buttons d-flex justify-content-between mt-4">
                        <button className="btn btn-outline-primary" onClick={editStudent}>Edit</button>
                        <button className="btn btn-outline-danger" onClick={deleteStudent}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCard
