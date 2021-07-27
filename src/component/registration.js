import React, { useState }  from 'react'
import Footer from './footer'
import firebase from './util/firebase'
import './assets/registration.css'
import { Redirect , useHistory} from 'react-router'


function Registration() {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [programme, setProgramme] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const history = useHistory();

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const addStudent = (e) => {
        e.preventDefault();
        setSubmitting(true);

        const studentRef = firebase.database().ref('studentDetail');
        const data = {
            name,
            address,
            contact,
            gender,
            email,
            programme
        }
        studentRef.push(data).then(resp =>{
            setSubmitting(false);
            history.push('/student-details')
            setName('')
            setAddress('')
            setContact('')
            setGender('')
            setEmail('')
            setProgramme('')
            
            // return <Redirect to="/student-details" />
        }).catch(error =>{
            setSubmitting(false);
        } )

    }
    return (
        <div className="registration">
            <div className="content pb-5">
                <div className="container">
                    <div className="start pt-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#" className="text-dark"><i class="fas fa-clipboard-check"></i></a></li>
                                <li class="breadcrumb-item active" aria-current="page">Add a Student</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="form-content shadow pt-2 pe-3 ps-3 pb-4">
                        <div className="title text-center mt-4 pb-4">
                            <h2>Student Registration Form</h2>
                            <h7 className="text-muted">Fill out the form carefully for registration</h7>
                        </div>
                        <div className="form-area">
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" onChange={nameChangeHandler} value={name} />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputAddress" class="form-label">Address</label>
                                    <input type="text" class="form-control" onChange={(e)=>setAddress(e.target.value)} value={address}/>
                                </div>
                                <div class="col-md-6">
                                    <label for="contact" class="form-label">Contact</label>
                                    <input type="text" class="form-control"onChange={(e)=>setContact(e.target.value)} value={contact} />
                                </div>
                                <div class="col-md-6">
                                    <label for="gender" class="form-label">Gender</label>
                                    <input type="text" class="form-control" onChange={(e)=>setGender(e.target.value)} value={gender}/>
                                </div>
                                <div class="col-md-6">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                                </div>
                                <div class="col-md-6">
                                    <label for="programme" class="form-label">Programme</label>
                                    <input type="text" class="form-control" onChange={(e)=>setProgramme(e.target.value)} value={programme} />
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-outline-success" onClick={addStudent} disabled={submitting}>Submit</button>
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