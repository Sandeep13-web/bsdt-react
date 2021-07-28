import firebase from './util/firebase'
import React from 'react'
import './assets/details.css'
import { useState } from 'react'

function StudentCard({ student , editStudent }) {


    const [uName, setuName] = useState('')
    const [uID, setuID] = useState('')

    // const [studentInfo, setStudentInfo] = useState({stuInfo: {

    //     }
    // })

    // // var abc = null;
    const deleteStudent = (id) => {
        const studentRef = firebase.database().ref("studentDetail").child(student.id);
        studentRef.remove();
    }

    // const editStudent = (student) => {
    //     setuName(student.name);
    //     setuID(student.id);

    // }

    // const updateStudent = () => {
    //     const studentRef = firebase.database.ref("studentDetail").child(uID);
    //     studentRef.update({
    //         name: uName,

    //     })
    //     setuName('');
    // }

    // // const updateStudentInfo = (updateStudent, newStudent) => {
    // //     const upStu = {...updateStudent}
    // //     setStudentInfo({student:upStu})
    // //     //setState({purchasable: sum > 0})
    // // }
    // // const editStudent = () => {
    // //     // const oldCount = state.ingredients[type]
    // //     // const newCount = oldCount + 1
    // //     const updateStudent = {...studentInfo.stuInfo}
    // //     updateStudent.stuInfo = student
    // //     //update price
    // //     const newStudent = student
    // //     abc = <div>ABCdefadsf</div>

    // //     //updateState
    // //     setStudentInfo({student:updateStudent})
    // //     updateStudentInfo(updateStudent, newStudent);
    // //     console.log(studentInfo)
    // // }


    // const editForm = (stu) => {
    //     return ( 
    //         <div className="form-area">
    //         <form class="row g-3">
    //             <div class="col-md-6">
    //                 <label for="name" class="form-label">Full Name</label>
    //                 <input type="text" class="form-control" value={stu.name} />
    //             </div>
    //             <div class="col-md-6">
    //                 <label for="inputAddress" class="form-label">Address</label>
    //                 <input type="text" class="form-control" value={stu.address} />
    //             </div>
    //             <div class="col-md-6">
    //                 <label for="contact" class="form-label">Contact</label>
    //                 <input type="text" class="form-control" value={stu.contact} />
    //             </div>
    //             <div class="col-md-6">
    //                 <label for="gender" class="form-label">Gender</label>
    //                 <input type="text" class="form-control" value={stu.gender} />
    //             </div>
    //             <div class="col-md-6">
    //                 <label for="email" class="form-label">Email</label>
    //                 <input type="email" class="form-control" value={stu.email} />
    //             </div>
    //             <div class="col-md-6">
    //                 <label for="programme" class="form-label">Programme</label>
    //                 <input type="text" class="form-control" value={stu.programme} />
    //             </div>
    //             <div class="col-12">
    //                 <button type="submit" class="btn btn-outline-success">Update</button>
    //             </div>
    //         </form>
    //     </div>
    //     )
    // }
    return (
        <div>
            {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="form-content shadow pt-2 pe-3 ps-3 pb-4">
                                <div className="title text-center mt-4 pb-4">
                                    <h2>Update Student Information</h2>
                                </div>
                                <div className="form-area">
                                    <form class="row g-3">
                                        <div class="col-md-6">
                                            <label for="name" class="form-label">Full Name</label>
                                            <input type="text" class="form-control" value={student.name} />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputAddress" class="form-label">Address</label>
                                            <input type="text" class="form-control" value={student.address} />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="contact" class="form-label">Contact</label>
                                            <input type="text" class="form-control" value={student.contact} />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="gender" class="form-label">Gender</label>
                                            <input type="text" class="form-control" value={student.gender} />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" class="form-control" value={student.email} />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="programme" class="form-label">Programme</label>
                                            <input type="text" class="form-control" value={student.programme} />
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-outline-success" onClick={updateStudent}>Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
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
                        <button className="btn btn-outline-primary" onClick={editStudent.bind(null, student)}>Edit</button>
                        <button className="btn btn-outline-danger" onClick={deleteStudent}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCard
