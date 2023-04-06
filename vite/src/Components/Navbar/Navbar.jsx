import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import Cart from '../Cart/Cart';

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false)

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className="item">
            <img src="/images/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className='link' to='/products/1'>Women</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/2'>Men</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/3'>Children</Link>
          </div>
        </div>
        <div className='center'>
          <Link className='link' to='/'>WearIt</Link>
        </div>
        <div className='right'>
          <div className='item'>
            <Link className='link' to='/'>Homepage</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>About</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>Contact</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
              <AddShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  );
}

export default Navbar


