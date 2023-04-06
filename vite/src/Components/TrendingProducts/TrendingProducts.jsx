import React from 'react'
import Card from '../Card/Card'
import './TrendingProducts.scss'

const TrendingProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/3755932/pexels-photo-3755932.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/16018003/pexels-photo-16018003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: 'Shirts',
            isNew: true,
            oldPrice: 24,
            price: 17,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/16039641/pexels-photo-16039641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/16039646/pexels-photo-16039646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: 'Pants',
            isNew: true,
            oldPrice: 14,
            price: 11,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/2285500/pexels-photo-2285500.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1858407/pexels-photo-1858407.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: 'Shoes',
            isNew: true,
            oldPrice: 60,
            price: 47,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/16024277/pexels-photo-16024277.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1007019/pexels-photo-1007019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: 'Skirts',
            isNew: true,
            oldPrice: 28,
            price: 18,
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/2442893/pexels-photo-2442893.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1687719/pexels-photo-1687719.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: 'Accessories',
            isNew: true,
            oldPrice: 130,
            price: 119,
        },
    ]
    return (
        <div className='trendingProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
            <div className="bottom">
                {data.map(item => (<Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default TrendingProducts