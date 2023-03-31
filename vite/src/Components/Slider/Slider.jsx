import React from 'react'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './Slider.scss'

const Slider = () => {

    const data = [
        'https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/757312/pexels-photo-757312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
    return (
        <div className='slider'>
            <div className="container">
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
                <img src={data[3]} alt="" />
            </div>
            <div className="icons">
                <div className="icon">
                    <KeyboardDoubleArrowLeftIcon />
                </div>
                <div className="icon">
                    <KeyboardDoubleArrowRightIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider