import React from 'react'
import facebook from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'
import pintrest from '../assets/icon-pinterest.svg'
import twitter from '../assets/icon-twitter.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container '>
                <div className='footer-links'>
                    <h2>Shortly</h2>
                </div>
                <div className='footer-links'>
                    <h2>Feature</h2>
                    <ul>
                        <li><a href='#'>Link Shortening</a></li>
                        <li><a href='#'>Branded Links</a></li>
                        <li><a href='#'>Analytics</a></li>
                    </ul>
                </div>
                <div className='footer-links'>
                    <h2>Resources</h2>
                    <ul>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Developers</a></li>
                        <li><a href='#'>Support</a></li>
                    </ul>
                </div>
                <div className='footer-links'>
                    <h2>Company</h2>
                    <ul>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Our Team</a></li>
                        <li><a href='#'>Careers</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <div className='footer-links'>
                    <ul className='footer-social'>
                        <li><a href='#'><img src={facebook} alt='facebook' /></a></li>
                        <li><a href='#'><img src={twitter} alt='twitter' /></a></li>
                        <li><a href='#'><img src={pintrest} alt='pintrest' /></a></li>
                        <li><a href='#'><img src={instagram} alt='instagram' /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer