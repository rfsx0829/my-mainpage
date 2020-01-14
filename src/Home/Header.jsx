import React from 'react';
import { Link } from 'bisheng/router';

export default function Header(props) {
  return (
    <header {...props} id="header">
      <Link id="logo">
        <h3>折腾</h3>
      </Link>
    </header>
  );
}
