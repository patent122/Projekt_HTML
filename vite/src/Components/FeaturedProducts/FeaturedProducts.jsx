import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'

const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/6015584/pexels-photo-6015584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: 'Shirts',
            isNew: true,
            oldPrice: 23,
            price: 16,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1006991/pexels-photo-1006991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: 'Pants',
            isNew: true,
            oldPrice: 15,
            price: 13,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1800053/pexels-photo-1800053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/2859181/pexels-photo-2859181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: 'Shoes',
            isNew: true,
            oldPrice: 65,
            price: 49,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1007019/pexels-photo-1007019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: 'Skirts',
            isNew: true,
            oldPrice: 30,
            price: 16,
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/735276/pexels-photo-735276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/9431876/pexels-photo-9431876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: 'Accessories',
            isNew: true,
            oldPrice: 140,
            price: 129,
        },
    ]
    return (
        <div className='featuredProducts'>
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

export default FeaturedProducts