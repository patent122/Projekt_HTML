import React from 'react';
import './CookieFAQ.scss';

const CookieFAQ = () => {
    return (
        <div className="faq-container">
            <h1>Cookie Policy</h1>
            <div className="faq-question">
                <h2>What are cookies?</h2>
                <p>
                    Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.
                </p>
            </div>
            <div className="faq-question">
                <h2>Why do you use cookies?</h2>
                <p>
                    We use cookies to improve your experience on our website. Cookies help us remember your preferences, such as your language or currency settings, and enable us to show you personalized content and ads based on your interests.
                </p>
            </div>
            <div className="faq-question">
                <h2>What types of cookies do you use?</h2>
                <p>
                    We use both session cookies and persistent cookies. Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device until they expire or until you delete them.
                </p>
            </div>
            <div className="faq-question">
                <h2>Do you use third-party cookies?</h2>
                <p>
                    Yes, we use third-party cookies from Google Analytics to track website traffic and improve our website performance. We also use cookies from social media platforms like Facebook and Twitter to enable social sharing and to show you personalized content and ads based on your interests.
                </p>
            </div>
            <div className="faq-question">
                <h2>How can I manage my cookie preferences?</h2>
                <p>
                    You can manage your cookie preferences by adjusting your browser settings. Please note that disabling cookies may impact your browsing experience on our website.
                </p>
            </div>
        </div>
    );
};

export default CookieFAQ;
