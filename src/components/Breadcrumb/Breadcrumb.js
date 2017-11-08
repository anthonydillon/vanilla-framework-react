import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrumb.css';

class Breadcrumb extends React.Component {
  render() {
    return (
      <ul className="p-breadcrumbs">
        <li className="p-breadcrumbs__item"><a href="#">Breadcrumb One</a></li>
        <li className="p-breadcrumbs__item"><a href="#">Breadcrumb Two</a></li>
        <li className="p-breadcrumbs__item"><a href="#">Breadcrumb Three</a></li>
        <li className="p-breadcrumbs__item">Breadcrumb Four</li>
      </ul>
    );
  }
}

export default Breadcrumb;
