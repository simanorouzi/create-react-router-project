import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import navigation from './navigation.module.css';

const MainNavigation = () => {
  return (
    <header>
      <ul className={navigation.navigation}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? navigation.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? navigation.active : undefined
            }
            end
          >
            Products
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
