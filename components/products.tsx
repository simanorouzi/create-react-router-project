import * as React from 'react';
import { Link } from 'react-router-dom';
const ProductList = [
  { title: 'Kebab', id: 'kebab' },
  { title: 'Kitchen', id: 'Kitchen' },
];
const Products = () => {
  return (
    <React.Fragment>
      <h2>Products Page</h2>
      <ul>
        <li>
          {ProductList.map((item) => (
            <Link key={item.id} to={item.id}>
              {item.title}
            </Link>
          ))}
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Products;
