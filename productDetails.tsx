import * as React from 'react';
import * as Router from 'react-router-dom';

const ProductDetails = () => {
  const param = Router.useParams();
  return <div>{param.productId}</div>;
};

export default ProductDetails;
