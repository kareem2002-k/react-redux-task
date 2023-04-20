import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../Redux/SingleProduct/SingleProductAction';

const SingleProduct = (props) => {
  const { productId } = useParams();

  useEffect(() => {
    props.fetchSingleProduct(productId);
  }, [productId]);

  if (props.product === null) {
    return (
      <div>
        <h2>No such product</h2>
      </div>
    );
  }

  return (
    <div>
      <div
        key={props.product.id}
        className="w-full grid grid-cols-2  mt-8 bg-white border border-gray-200 rounded-lg shadow "
      >
        <div className="m-8">
        {props.product.images && props.product.images.length > 0 &&
  <img className="  max-h-96 rounded-t-lg"  src={props.product.images[0]} alt="product image" />
}
        </div>

        <div className=" grid grid-cols-1  ">
          <div className=" text-center">
            <h5 className="text-3xl font-bold tracking-tight text-gray-900 mt-10 ">
              {props.product.title}
            </h5>

            <h5 className="text-xl  tracking-tight text-gray-900  mt-10 ">
              {props.product.description}
            </h5>

            <h5 className="text-2xl font-bold tracking-tight text-gray-900  mt-10 ">
              ${props.product.price}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.singleProduct.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleProduct: (productId) => dispatch(fetchSingleProduct(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
