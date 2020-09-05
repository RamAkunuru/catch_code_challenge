import React from 'react';

export default (props) => {
    const { name, salePrice, retailPrice, imageUrl, quantityAvailable } = props.product;

    return (
        <div className="product-card">
            <a href="#" title={name}>
                <div className="product-image">
                    <img src={imageUrl} alt={name}/>
                    <span>{quantityAvailable ? null : "SOLD OUT"}</span>
                </div>
                
                <div className="product-details">
                    <h2 className="product-name">{name}</h2>
                    <p className="product-price">{ retailPrice ? <del className="price">{retailPrice}</del> : "" }</p>
                    <p className="price sale-price">{salePrice}</p>
                </div>
            </a>
        </div>
    );
}