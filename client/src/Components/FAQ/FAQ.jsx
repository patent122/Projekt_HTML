import React from 'react';
import './FAQ.scss';

const FAQ = () => {
    return (
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-question">
                <h2>What is your return policy?</h2>
                <p>
                    We offer a 30-day return policy for all of our products. If you're not satisfied with your purchase, simply contact us and we'll provide instructions on how to return your item for a full refund.
                </p>
            </div>
            <div className="faq-question">
                <h2>Do you offer free shipping?</h2>
                <p>
                    Yes, we offer free shipping on all orders over $50. For orders under $50, shipping is a flat rate of $5.
                </p>
            </div>
            <div className="faq-question">
                <h2>How long does shipping take?</h2>
                <p>
                    Our standard shipping time is 3-5 business days within the United States. International shipping times may vary depending on the destination.
                </p>
            </div>
            <div className="faq-question">
                <h2>What payment methods do you accept?</h2>
                <p>
                    We accept all major credit cards, PayPal, Apple Pay, and Google Pay.
                </p>
            </div>
            <div className="faq-question">
                <h2>How can I track my order?</h2>
                <p>
                    Once your order has been shipped, we'll send you an email with a tracking number and a link to track your package.
                </p>
            </div>
        </div>
    );
};

export default FAQ;
