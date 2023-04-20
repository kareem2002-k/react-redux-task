import {FETCH_SINGLE_FAILURE, FETCH_SINGLE_REQUEST, FETCH_SINGLE_SUCCESS} from './SingleProductType'
 import Service from '../../services/Service'
 const fetchSignleRequest = () => {
        return {
            type: FETCH_SINGLE_REQUEST
        }
    }

    const fetchSingleSuccess = (product) => {
        return {
            type: FETCH_SINGLE_SUCCESS,
            payload: product
        }
    }

    const fetchSingleFailure = (error) => {
        return {
            type: FETCH_SINGLE_FAILURE,
            payload: error
        }
    }
    

    export const fetchSingleProduct = (id ) => {
        return (dispatch) => {
            dispatch(fetchSignleRequest())
            Service.getSingleProduct(id)
                .then(response => {
                    const product = response.data
                    dispatch(fetchSingleSuccess(product))
                }
                )
                .catch(error => {
                    const errorMsg = error.message
                    dispatch(fetchSingleFailure(errorMsg))
                }
                )

        }

    }