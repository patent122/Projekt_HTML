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
                    <div className="facebookIcon" onClick={() => window.open("https://www.facebook.com/")}>
                        <FacebookIcon />
                    </div>
                    <div className="linkedInIcon" onClick={() => window.open("https://pl.linkedin.com/")}>
                        <LinkedInIcon />
                    </div>
                    <div className="instagramIcon" onClick={() => window.open("https://www.instagram.com/")}>
                        <InstagramIcon />
                    </div>
                    <div className="twitterIcon" onClick={() => window.open("https://twitter.com/?lang=pl")}>
                        <TwitterIcon />
                    </div>
                    <div className="googleIcon" onClick={() => window.open("https://www.google.com")}>
                        <GoogleIcon />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact