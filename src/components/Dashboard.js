import React, { useEffect } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import { GET_PRODUCT_LIST }  from '../actions';

const Dashboard = (props) => {
    useEffect(() => {
        // props.actions.getAPIDetails();
        props.fetchProductDetails();
    }, []);

    const renderProducts = () => {
        const { products } = props;

        return products.map(product => <ProductCard product={product} key={product.id}/>);
    };

    return (
        <div className="dashboard">{ props.products.length ? renderProducts() : null }</div>
    );
}

const mapStateToProps = state => ({
    products: state.productList
});

// using redux
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(productsActions, dispatch)
// });

// using sagas
const mapDispatchToProps = dispatch => {
    return {
        fetchProductDetails: () => dispatch({ type: GET_PRODUCT_LIST})
    }
};

export { Dashboard }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
