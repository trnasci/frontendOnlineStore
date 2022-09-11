import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { match as matchProprType, PropTypes } from 'prop-types';
import { getProductById } from '../services/api';

class PodructDetail extends Component {
  state = {
    product: null,
  };

  componentDidMount() {
    this.getProduct();
  }

  getProduct = () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    getProductById(id).then((productInfo) => this.setState({ product: productInfo }));
  };

  handlerAddToCart = () => {
    const { product: { title, price, thumbnail } } = this.state;
    const productsToCart = JSON.parse(localStorage.getItem('products')) || [];
    const qty = 1;
    const productFound = productsToCart.find((product) => (product.title === title));
    if (productFound) {
      productsToCart.forEach((product) => {
        if (product.title === title) {
          product.qty += 1;
        }
      });
    } else {
      productsToCart.push({ title, thumbnail, price, qty });
    }
    localStorage.setItem('products', JSON.stringify(productsToCart));
  };

  renderProduct = () => {
    const { product } = this.state;
    if (product !== null) {
      return (
        <div>
          <h5
            data-testid="product-detail-name"
          >
            {product.title}
          </h5>
          <img
            src={ product.thumbnail }
            alt={ product.title }
            data-testid="product-detail-image"
          />
          <h6
            data-testid="product-detail-price"
          >
            {`R$ ${product.price}`}
          </h6>
          <button
            data-testid="product-detail-add-to-cart"
            type="submit"
            id="0"
            onClick={ this.handlerAddToCart }
          >
            Adicionar ao carrinho
          </button>
        </div>
      );
    }
    return null;
  };

  render() {
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/carrinho"
        >
          Carrinho
        </Link>
        {this.renderProduct()}
      </div>
    );
  }
}

PodructDetail.defaultProps = {
  match: {},
};

PodructDetail.propTypes = {
  match: PropTypes.shape(matchProprType),
};

export default PodructDetail;
