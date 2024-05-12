import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo1.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import gmail_icon from '../Assets/gmail.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
                <img src={footer_logo} alt="" className='big-logo'/>
        </div>
        <ul className="footer-links">
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <a href='https://www.instagram.com/greencart_officials/?hl=en' target='blank'>
                    <img src={instagram_icon} alt="" />
                </a>
            </div>
            <div className="footer-icon-container">
                <a href="https://chat.whatsapp.com/H9IdpnvFdSr9JrIL6PlxzS" target='blank'>
                    <img src={whatsapp_icon} alt="" />
                </a>
            </div>
            <div className="footer-icon-container">
                <a href="mailto:greencartofficials@gmail.com" target='blank'>
                    <img src={gmail_icon} alt="" />
                </a>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer