import instance from "../api/Axios";

const Service = {
    getAllProducts: async () => {
        return  await instance.get('/products');
    }
    ,
    getSingleProduct: async (id) => {
        return  await instance.get(`/products/${id}`);
    }

}

export default Service;