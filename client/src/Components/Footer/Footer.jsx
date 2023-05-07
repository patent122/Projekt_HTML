import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <Link className='link' to='/products/1'>Women</Link>
          <Link className='link' to='/products/1'>Men</Link>
          <Link className='link' to='/products/1'>Shoes</Link>
          <Link className='link' to='/products/1'>Accesories</Link>
          <Link className='link' to='/products/1'>New Arrivals</Link>
        </div>
        <div className="item">
          <h1>Links</h1>
          <Link className='link' to='/FAQ/'>FAQ</Link>
          <Link className='link' to='/products/1'>Pages</Link>
          <Link className='link' to='https://www.google.pl/maps/place/Have+It+Wear+It/@54.4318788,18.5582121,17z/data=!3m1!4b1!4m6!3m5!1s0x46fd0abe7a417597:0x731406adfdef9d6b!8m2!3d54.4318788!4d18.560787!16s%2Fg%2F11h0vqp_lz'>Stores</Link>
          <Link className='link' to='/products/1'>Compare</Link>
          <Link className='link' to='/Cookies/'>Cookies</Link>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>"Welcome to our online clothing store! Our offer includes a wide selection of fashionable and stylish clothes for women, men, and children in various sizes and colors. In our store, you will find everything you need to create a perfect wardrobe - from elegant dresses and shirts to comfortable pants and sporty hoodies. We also offer a wide range of accessories such as bags, shoes, and jewelry that will complement your look and add character to it."</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span className="info">Info</span>
          <span className="contact1">wearitinfo@gmail.com</span>
          <span className="contact1">Tel. No. +48 576 233 500</span>
          <span className="info">Business</span>
          <span className="contact1">wearitbusiness@gmail.com</span>
          <span className="contact1">Tel. No. +48 576 233 600</span>
          <span className="info">Complaints</span>
          <span className="contact1">wearitcomplaints@gmail.com</span>
          <span className="contact1">Tel. No. +48 576 233 700</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>Wearit</span>
          <span className="copyright">© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  )
}

export default Footer