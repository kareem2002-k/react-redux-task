import React, { useEffect } from 'react'
import Service from '../services/Service'
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchAllProducts } from '../Redux/AllPrducts/AllProductsAction';


function Products(props) {

   

    const navigate = useNavigate()

    useEffect(() => {
        props.fetchAllProducts()
        
    }, [])






    const handleClick = (id) => {
        // Navigate to product details page with product ID
        navigate("/product/" + id); 
        console.log(id)// Replace "1" with the actual product ID
      };
    




    
    


  return (
     <div>
    <div>
    <h1  className='  caret-violet-950 ' >Products</h1>
        
    <div className="grid   grid-cols-4 ml-10">



                {
                    
                    props.products.map(
                        
                        product =>
                            
                        <div key={product.id} className="w-full max-w-sm grid grid-rows-1  mt-8 bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="p-8  max-h-96 rounded-t-lg"  src={product.images[0]} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{product.title}</h5>
                            </a>
                           
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 ">${product.price}</span>
                               
                                <button onClick={() => handleClick(product.id)}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">View Product </button>
                            </div>
                        </div>
                    </div>
                    )

                }

</div>
            
          
    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        products: state.allProducts.products
        ,erorr: state.allProducts.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProducts: () => dispatch(fetchAllProducts())
    }
}


export default connect (mapStateToProps , mapDispatchToProps)( Products)