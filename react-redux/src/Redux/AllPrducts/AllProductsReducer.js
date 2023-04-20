import { FETCH_ALL_FAILURE , FETCH_ALL_REQUEST , FETCH_ALL_SUCCESS } from "./AllProductsType";
 
const initalState = {
    loading: false,
    products: [],
    error: ''
}

const allProductsReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_ALL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_ALL_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: ''
            }
        case FETCH_ALL_FAILURE:
            return {
                loading: false,
                products: [],
                error: action.payload
            }
        default: return state
    }
}

export default allProductsReducer
