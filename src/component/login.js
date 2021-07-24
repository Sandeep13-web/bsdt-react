import React from 'react'
import loginImg from './assets/images/login-image.png';
import './assets/login.css'

function Login() {
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
                                <input type="email" class="form-control login-input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control login-input" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <button type="submit" class="btn btn-success submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
