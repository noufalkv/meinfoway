import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Detail(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fecthData = async () => {
            const { data } = await axios.get('../data.json');
            setProducts(data);

        };

        fecthData();

    }, []);

    console.log('param', props.match.params.id)
    const product = products.find((x) =>
        x._id === parseInt(props.match.params.id)

    );
    console.log('Prd', product)
    if (!product) {
        return <div> Product Not Found</div>;
    }
    return (
        <div>
            <Link to="/">Back to result</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>

                        </li>
                        <li>Pirce : ${product.price}</li>
                        <li>
                            Description:
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
