import { FETCH_ALL_FAILURE , FETCH_ALL_REQUEST , FETCH_ALL_SUCCESS } from "./AllProductsType";
import instance from "../../api/Axios";
import Service from "../../services/Service";
 
 const fetchAllRequest = () => {
        return {
            type: FETCH_ALL_REQUEST
        }
    }

    const fetchAllSuccess = (products) => {
        return {
            type: FETCH_ALL_SUCCESS,
            payload: products
        }
    }

    const fetchAllFailure = (error) => {
        return {
            type: FETCH_ALL_FAILURE,
            payload: error
        }
    }

    export const  fetchAllProducts  =  () => {
        return (dispatch) => {
            dispatch(fetchAllRequest())
             Service.getAllProducts()
                .then(response => {
                    const products = response.data.products;
                    dispatch(fetchAllSuccess(products))
                })
                .catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchAllFailure(errorMsg))
                })
        }
    }


    