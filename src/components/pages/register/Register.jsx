import React from 'react'
import "./Register.css"
import Footer from '../../layout/footer/Footer'
import Header from '../../layout/header/Header'

function Register() {
  return (
      <>
        <div className='register'>
            <Header />
            <div className="register--div">
               
                <div className='register--div--a'>
                    <div className="register--div--a--1">

                    </div>

                </div>
                
                <div className="register--div--b">
                    <h3>Register</h3>
                    <form class="row g-3">
                    <div class="col-md-6">
                            <label for="inputEmail3" class="form-label">First Name</label>
                            <input type="firstName" class="form-control" id="inputEmail3" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword3" class="form-label">Last Name</label>
                            <input type="lastName" class="form-control" id="inputPassword3" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">State</label>
                            <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputZip" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="inputZip" />
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Register