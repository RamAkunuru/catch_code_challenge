import { GET_PRODUCT_LIST, SORT_BY_PRICE } from './actions';
import Api from './services/api';

export function setProductList(productList) {
    return { type: GET_PRODUCT_LIST, payload: productList };
}

export function sortByPrice(payload) {
    return { type: SORT_BY_PRICE, payload };
}

// export function getAPIDetails() {
//     return dispatch => {
//         Api.products
//             .getProducts()
//             .then(response => {
//                 dispatch(setProductList(response.data));
//             })
//             .catch(error => {
//                 console.log('error = ', error);
//             });
//     };
// }
