import React from 'react';
import './ContactPage.scss';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <h2>Contact Us</h2>
            <div className="contact-info">
                <div className="department">
                    <h3>Sales Department</h3>
                    <p>Email: sales@wearit.com</p>
                    <p>Phone: +1 123-456-7890</p>
                </div>
                <div className="department">
                    <h3>Customer Support</h3>
                    <p>Email: support@wearit.com</p>
                    <p>Phone: +1 987-654-3210</p>
                </div>
                <div className="department">
                    <h3>Press Inquiries</h3>
                    <p>Email: press@wearit.com</p>
                    <p>Phone: +1 555-123-4567</p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
