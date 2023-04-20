import { combineReducers } from "redux";
import allProductsReducer from "./AllPrducts/AllProductsReducer";
import singleProductReducer from "./SingleProduct/SingleProductReducer";


const rootReducer = combineReducers({
    allProducts: allProductsReducer
    ,singleProduct: singleProductReducer
    
 
});

export default rootReducer;