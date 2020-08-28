import React from 'react';
import Logo from './Logo';
import PriceDropdown from './PriceDropdown';

export default () => (
    <div className="header">
        <h1><Logo width="13.2rem" /></h1>
        <PriceDropdown />
    </div>
)
