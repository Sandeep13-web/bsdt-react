import firebase from './util/firebase'
import React from 'react'

function StudentCard({ student }) {
    const deleteStudent = (id) => {
        const studentRef = firebase.database().ref("studentDetail").child(student.id);
        studentRef.remove();
    }
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Student Name : {student.name} </h5>
                    <h6 className="card-title">Address : {student.address} </h6>
                    <h6 className="card-title">Contact : {student.contact} </h6>
                    <h6 className="card-title">Gender : {student.gender}</h6>
                    <h6 className="card-title">Email : {student.email}</h6>
                    <h6 className="card-title">Programme :{student.programme}</h6>
                    <div className="buttons d-flex justify-content-between mt-4">
                        <button className="btn btn-outline-primary">Edit</button>
                        <button className="btn btn-outline-danger" onClick={deleteStudent}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCard
