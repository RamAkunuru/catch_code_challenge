import { takeLatest, put, call, takeEvery } from 'redux-saga/effects';
import '@babel/polyfill';
import { GET_PRODUCT_LIST, GET_PRODUCT_LIST_ASYNC }  from '../actions';
import Api from '../services/api';

function* productDetailsAsync() {
    const response = yield call(Api.products.getProducts);
    yield put({ type: GET_PRODUCT_LIST_ASYNC, payload: response.data });
}

export function* watchGetProductDetails() {
    yield takeLatest(GET_PRODUCT_LIST, productDetailsAsync);
}