import React from 'react';
import { Link } from 'react-router-dom';

export default function Item(props) {
    const { product } = props;
    return (


        <div key={product._id} className="card">
        
            <Link to={`/item/${product._id}`}>

                <img className="medium" src={product.image} alt={product.name} />
            </Link>
            <div className="card-body">
                <Link to={`/item/${product._id}`}>

                    <h2>{product.name}</h2>
                    <div>{product.description}</div>
                </Link>

                <div className="price">${product.price}</div>
            </div>
        </div>
    );
}
