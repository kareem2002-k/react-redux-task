import { FETCH_SINGLE_REQUEST, FETCH_SINGLE_SUCCESS, FETCH_SINGLE_FAILURE } from './SingleProductType'

const initalState = {
    loading: false,
    product: {},
    error: ''
}

const singleProductReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_SINGLE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_SINGLE_SUCCESS:
            return {
                loading: false,
                product: action.payload,
                error: ''
            }
        case FETCH_SINGLE_FAILURE:
            return {
                loading: false,
                product: {},
                error: action.payload
            }
        default: return state
    }
}

export default singleProductReducer
