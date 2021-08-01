import React, { useEffect, useState } from 'react';
import Items from '../component/Item';
import axios from 'axios';


export default function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fecthData = async () => {
            const { data } = await axios.get('data.json');
            setProducts(data);
        };
       
        fecthData();

    }, []);
    return (
        <div>
            <div className="row center">
                {products.map((product) => (
                    <Items key={product._id} product={product}></Items>
                ))}
            </div>
        </div>
    );
}
