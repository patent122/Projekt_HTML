import React from 'react'
import './Contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
const Contact = () => {
    return (
        <div className='contact'>
            <div className="wrapper">
                <span>Stay in touch</span>
                <div className="mail">
                    <input type="text" placeholder='Enter your e-mail...' />
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                    <div className="facebookIcon">
                        <FacebookIcon />
                    </div>
                    <div className="linkedInIcon">
                        <LinkedInIcon />
                    </div>
                    <div className="instagramIcon">
                        <InstagramIcon />
                    </div>
                    <div className="twitterIcon">
                        <TwitterIcon />
                    </div>
                    <div className="googleIcon">
                        <GoogleIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact