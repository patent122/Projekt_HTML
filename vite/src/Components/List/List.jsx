import Card from '../Card/Card'
import React from 'react'
import './List.scss'

const List = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/3755932/pexels-photo-3755932.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: 'Shirts',
            isNew: true,
            oldPrice: 24,
            price: 17,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/16039641/pexels-photo-16039641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: 'Pants',
            isNew: true,
            oldPrice: 14,
            price: 11,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/2285500/pexels-photo-2285500.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: 'Shoes',
            isNew: true,
            oldPrice: 60,
            price: 47,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/16024277/pexels-photo-16024277.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: 'Skirts',
            isNew: true,
            oldPrice: 28,
            price: 18,
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/2442893/pexels-photo-2442893.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: 'Accessories',
            isNew: true,
            oldPrice: 130,
            price: 119,
        },
    ]
    return (
        <div className='list'>{data?.map(item => (
            <Card item={item} key={item.id} />
        ))}</div>
    )
}

export default List