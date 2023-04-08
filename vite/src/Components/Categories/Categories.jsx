import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className='link' to='/products/1'>Sale</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/1126935/pexels-photo-1126935.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className='link' to='/products/1'>Woman</Link>
                    </button></div>
            </div>
            <div className="col">
                <div class="row">
                    <img src="https://images.pexels.com/photos/9154696/pexels-photo-9154696.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className='link' to='/products/1'>Man</Link>
                    </button></div>
            </div>
            <div className="col col-b">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/15761176/pexels-photo-15761176.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <button>
                                <Link className='link' to='/products/1'>New Season</Link>
                            </button></div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/15787380/pexels-photo-15787380.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <button>
                                <Link className='link' to='/products/1'>Shoes</Link>
                            </button></div>
                    </div>
                </div>
                <div className="row">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/313719/pexels-photo-313719.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <button>
                            <Link className='link' to='/products/1'>Accessories</Link>
                        </button></div>
                </div>
            </div>
        </div>
    )
}

export default Categories