import React from "react";
import Button from './Button';
import   './Footer.css';
import { NavLink } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DiamondIcon from '@mui/icons-material/Diamond';

const Footer=()=>{
    return(<>
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to recieve our best Vaction deals.
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe any time.
                </p>
                <div className="input-area">
                    <form>
                        <input type="email" placeholder="your email" name="email" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>                    
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <NavLink to='/sign-up'>How it works</NavLink>
                        <NavLink to='/'>Testimonials</NavLink>
                        <NavLink to='/'>Careers</NavLink>
                        <NavLink to='/'>Investors</NavLink>
                        <NavLink to='/'>Terms of Service</NavLink>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <NavLink to='/'>Contact</NavLink>
                        <NavLink to='/'>Support</NavLink>
                        <NavLink to='/'>Destinations</NavLink>
                        <NavLink to='/'>Sponsorships</NavLink>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <NavLink to='/'>Submit Video</NavLink>
                        <NavLink to='/'>Ambassadors</NavLink>
                        <NavLink to='/'>Agency</NavLink>
                        <NavLink to='/'>Influencer</NavLink>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <NavLink to='/'>Instagram</NavLink>
                        <NavLink to='/'>Facebook</NavLink>
                        <NavLink to='/'>Youtube</NavLink>
                        <NavLink to='/'>Twitter</NavLink>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <NavLink to='/' className='social-logo'>
                            TRVL
                            <DiamondIcon className="TRVLlogo"/>
                        </NavLink>
                    </div>
                <small className='website-rights'>TRVL © 2024</small>
                <div className='social-icons'>
                    <NavLink className='social-icon-link facebook'
                          to='/'
                          target='_blank'
                          aria-label='Facebook'>
                        <FacebookIcon className="facebook"/>
                     </NavLink>
                    <NavLink className='social-icon-link instagram'
                          to='/'
                          target='_blank'
                         aria-label='Instagram'>
                         <InstagramIcon className="insta"/>
                    </NavLink>
                    <NavLink className='social-icon-link youtube'
                          to='/'
                          target='_blank'
                          aria-label='Youtube'>
                         <YouTubeIcon className="youtube"/>
                    </NavLink>
                    <NavLink className='social-icon-link twitter'
                          to='/'
                          target='_blank'
                          aria-label='Twitter'>
                        <TwitterIcon className="twitter"/>
                    </NavLink>
                    <NavLink className='social-icon-link LinkedIn'
                          to='/'
                          target='_blank'
                          aria-label='LinkedIn'>
                          <LinkedInIcon className="linkedIn"/>
                    </NavLink>
                </div>
            </div>
             </section>
        </div>
    </>)
}

export default Footer;