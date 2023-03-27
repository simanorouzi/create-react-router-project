import * as React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
  const param = useParams();
  return (
    <React.Fragment>
      <div>{param.productId}</div>
      <Link to=".." relative="path">
        Back
      </Link>
    </React.Fragment>
  );
};

export default ProductDetails;
