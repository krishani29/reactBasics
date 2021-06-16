import React from 'react';
import Product from './Product'
import productData from './vschoolProducts'


function ProductApp() {
    const productComponent = productData.map(item => <Product key={item.id} product={item} />)
    return (
    <div className="productApp center">
       <h1>Products</h1>
        <h3>{productComponent}</h3>
    </div>
    )
}
 export default ProductApp;