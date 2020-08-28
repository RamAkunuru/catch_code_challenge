import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productsActions from '../actionCreators';
import ProductCard from './ProductCard';

const Dashboard = (props) => {
    useEffect(() => {
        props.actions.getAPIDetails();
    }, []);

    const renderProducts = () => {
        const { products } = props;

        return products.map(product => <ProductCard product={product} key={product.id}/>);
    };

    return (
        <div className="dashboard">{props.products.length ? renderProducts() : null}</div>
    );
}

const mapStateToProps = state => ({
    products: state.productList
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(productsActions, dispatch)
});

export { Dashboard }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
