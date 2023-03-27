import * as React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <React.Fragment>
      <h2>Products Page</h2>
      <Link to="/Products/Product1">Product1</Link>
      <Link to="/Products/Product2">Product2</Link>
      <Link to="/Products/Product3">Product3</Link>
    </React.Fragment>
  );
};

export default Products;
