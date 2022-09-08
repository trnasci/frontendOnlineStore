import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    const {
      category,
    } = this.props;
    return (
      <li data-testid="category">
        <button
          type="submit"
          data-testid={ category }
        >
          {category}
        </button>
      </li>
    );
  }
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Category;
