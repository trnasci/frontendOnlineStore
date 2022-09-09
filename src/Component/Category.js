import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    const {
      category,
      id,
      onClick,
    } = this.props;
    return (
      <li data-testid="category">
        <button
          type="submit"
          data-testid={ category }
          id={ id }
          onClick={ onClick }
        >
          {category}
        </button>
      </li>
    );
  }
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Category;
