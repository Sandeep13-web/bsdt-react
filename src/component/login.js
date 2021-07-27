import React, { useState } from 'react'
import loginImg from './assets/images/login-image.png';
import './assets/login.css'
import { NavLink, Redirect } from 'react-router-dom'


function Login({ authenticate, isAuth }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    if (isAuth) {
        return <Redirect to='/' />
    }

    return (
        <>
            <section>
                <div className="imageBox">
                    <img src={loginImg} className="img-fluid" />
                </div>
                <div className="login-form-content">
                    <div className="formBox">
                        <h2>Login</h2>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Username</label>
                                <input type="email" class="form-control login-input" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setUsername(e.target.value) }} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control login-input" id="exampleInputPassword1" onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <NavLink to="/" className="btn btn-success submit-btn" onClick={authenticate.bind(null, username, password)}>Submit</NavLink>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;
