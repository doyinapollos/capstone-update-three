import React from 'react'
import "./SignInPage.css"
import Footer from '../../layout/footer/Footer'
import Header from '../../layout/header/Header'

function SignInPage() {
  return (
      <>
        
        <div className='signInPage'>
        <Header />
            <div className="signIn--div">
                <h2 className='signin--h2'>Sign in</h2>
                <div className="signIn--div--a">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                </div>

            </div>
        </div>
        <Footer />
    </>
  )
}

export default SignInPage