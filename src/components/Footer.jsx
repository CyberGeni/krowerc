import React from 'react'
import dribbble from '../assets/dribbble.png'
import behance from '../assets/behance.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
function Footer() {
    return (
        <footer>
            <div className='footer-content'>
                <div className='top-half'>
                    <h1 className='logo'>Crework<span>•</span></h1>
                    <div className='footer-links'>
                        <div><a href="">About us</a>
                            <a href="">Curriculum</a></div>
                        <div><a href="">Our Graduates</a>
                            <a href="">Refund Policy</a></div>


                    </div>
                    <div className='social-icons'>
                        <img src={dribbble} alt="" />
                        <img src={behance} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={facebook} alt="" />
                    </div>
                </div>
                <div className="gradient-line"></div>
                <p>Copyright &copy; 2024 Crework</p>
            </div>
        </footer>
    )
}

export default Footer