import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <div style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column' }}>
      <Link to="/">First Component</Link>
      <Link to="/second">Second Component</Link>
      <Link to="/third">Third Component</Link>
      <Link to="/fourth">Fourth Component</Link>
    </div>
);

export default Menu;