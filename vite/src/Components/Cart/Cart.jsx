import React from 'react'
import './Cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {

    const data = [{
        id: 1,
        img: "https://images.pexels.com/photos/3755932/pexels-photo-3755932.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: 'Shirts',
        desc: 'very nice shirt',
        isNew: true,
        oldPrice: 24,
        price: 17,

    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/16039641/pexels-photo-16039641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: 'Pants',
        desc: 'very nice pants',
        isNew: true,
        oldPrice: 14,
        price: 11,
    }
    ]
    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">
                            1 x ${item.price}
                        </div>
                    </div>
                    <DeleteOutlineIcon className='delItem' />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>ResetCart</span>
        </div>
    );
};

export default Cart