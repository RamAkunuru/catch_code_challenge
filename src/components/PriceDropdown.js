/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productsActions from '../actionCreators';

const PriceDropdown = props => {
    const handlePriceDropdown = event => {
        const sortOrder = event.target.value === 'highest' ? 'desc' : 'asc';
        props.actions.sortByPrice(sortOrder);
    }

    return (
        <select className="price-dropdown" onChange={handlePriceDropdown}>
            <option value="highest">Highest Price</option>
            <option value="lowest">Lowest Price</option>
        </select>
    )
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(productsActions, dispatch)
});

export { PriceDropdown }

export default connect(null, mapDispatchToProps)(PriceDropdown);