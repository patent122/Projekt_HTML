import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import "./FeaturedProducts.scss"
import Card from '../Card/Card'


const FeaturedProducts = ({ type }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // DLACZEGO NIE DZIAŁAJĄ ZMIENNIE ŚRODOWISKOWE? (.env)
            try {
                const res = await axios.get(
                    process.env.REACT_APP_API_URL + "/products",
                    {
                        headers: {
                            Authorization: "bearer " + "fef424ef8d66050d34312d7c6039d4ccf9560e7b1b4f88018b94b1d48d6aac1b003a10753e506ac914690b8d3b7f015f76cc202099668e05d35aba5a60252ad4e5898881e11727caf399f4c20971e6898b5e520fce7d7d45c3998aaaa72ff2228c33d6bf415e3de7620ef769e2d2be66d0365e11b5b86e3bb7fcaaa31091e2f8",
                        },
                    }
                );
                setData(res.data.data)
            } catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, []);

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    "Best-selling, well-reviewed, brand new products. Check out our most recent offer."
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