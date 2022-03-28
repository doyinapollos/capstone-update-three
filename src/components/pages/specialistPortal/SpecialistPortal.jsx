import React from 'react'
import "./SpecialistPortal.css"
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'


function SpecialistPortal() {
  return (
        
        <div className='Portal'>
        <Header />
            <div className="Portal--div--1">
                <div className='Portal--div--1--left'>
                    <div className="profile--pic--div">
                        <img className='profile-pic' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='' />

                    </div>
                    <div className="profile--name--div">
                        <h3>John Doe</h3>
                        <span className='location--span'>Lagos, Nigeria - 10am, local time</span>

                        <div className='available--div'>
                            <button className='available--btn'>Available now</button>
                            <span className='off--span'>off</span>
                            <div className='edit--div'>edit</div>
                        </div>
                        

                    </div>

                </div>
                <div className='Portal--div--1--right'>
                    <button className='profile--btn--1'>See public profile</button>
                    <button className='profile--btn--2'>profile settings</button>

                </div>
            </div>

            <div className='Portal--div--2'>
                <div className="portal--div--2--a">
                    <div className='video--div'>
                        <p>Video introduction</p>
                        <div className='edit'>add</div>
                    </div>
                    <div className='video--div'>
                        <p>Hours per week</p>
                        <div className='edit'>edit</div>
                    </div>
                    <div className='video--div'>
                        <p>Verification</p>
                        <div className='edit'>edit</div>
                    </div>
                    <div className='video--div'>
                        <p>Education</p>
                        <div className='edit'>add</div>
                    </div>
                    <div className='video--div'>
                        <p>Languages</p>
                        <div className='edit'>add</div>
                    </div>
                    <div className='video--div'>
                        <p>email@gmail.com</p>
                        <div className='edit'>edit</div>
                    </div>
                    <div className='video--div'>
                        <p>Contact</p>
                        <div className='edit'>edit</div>
                    </div>

                </div>
                
                <div className="portal--div--2--b">
                    <div className='portal--div--2--b--1'>
                        <div className='portal--div--2--b--1a'>
                            <div className='work--title--div'>
                                <h4 className='h4'>Front end developer</h4>
                                <div className='edit'>edit</div>

                            </div>
                            <div className='price--div'>
                                <h4 className='h4'>N700/Hr</h4>
                                <div className='edit'>edit</div>

                            </div>

                        </div>
                        <div className='portal--div--2--b--1b'>
                            <div className='text'>I am a web developer specializing in the front end. I build the front
                               end for small and medium-sized organizations/businesses. If you are
                                looking to have a spectacular, clear, and professional design with
                                great responsiveness, I can do it for you.I am experienced in HTML5 
                                and CSS, Javascript, React, and Redux.</div>
                                <div className='edit'>edit</div>
                        </div>

                    </div>
                    <div className='portal--div--2--b--2'>
                        <h4 className='h4'>Work history</h4>
                        <div>No work yet. Once you start getting hired, your work with clients will show up here.</div>
                        <h5 className='h4'>Start your search</h5>
                    </div>
                    <div className='portal--div--2--b--3'>
                        <div className='skills--div--1'>
                            <h4 className='h4'>Skills</h4>
                            <div className='edit'>edit</div>

                        </div>
                        <div className='skills--div--2'>
                                <div className='skills'>HTML5</div>
                                <div className='skills'>CSS</div>
                                <div className='skills'>JAVASCRIPT</div>
                                <div className='skills'>REACT</div>
                                <div className='skills'>REDUX</div>

                            </div>

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    
  )
}

export default SpecialistPortal