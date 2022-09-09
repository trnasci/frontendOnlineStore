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
      <button id={ id } onClick={ onClick } type="submit" data-testid="category">
        { category }
      </button>
    );
  }
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Category;
