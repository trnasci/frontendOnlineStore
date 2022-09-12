import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Carrinho extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emptyCart: true,
      productsToCart: [],

    };
  }

  componentDidMount() {
    let CART_PRODUCTS = null;
    CART_PRODUCTS = JSON.parse(localStorage.getItem('products'));
    if (CART_PRODUCTS === null) {
      this.setState({
        emptyCart: false,
      });
      console.log(CART_PRODUCTS);
    }
    if (CART_PRODUCTS !== null) {
      this.setState({
        emptyCart: true,
        productsToCart: CART_PRODUCTS,
      });
    }
  }

  handlerAddQty = (event) => {
    const { id } = event.target;
    const { productsToCart } = this.state;
    const productFound = productsToCart.find((product) => (product.title === id));
    if (productFound) {
      productsToCart.forEach((product) => {
        if (product.title === id) {
          product.qty += 1;
        }
      });
    }
    localStorage.setItem('products', JSON.stringify(productsToCart));
    let CART_PRODUCTS = null;
    CART_PRODUCTS = JSON.parse(localStorage.getItem('products'));
    this.setState({
      productsToCart: CART_PRODUCTS,
    });
  };

  handlerSubQty = (event) => {
    const { id } = event.target;
    const { productsToCart } = this.state;
    const productFound = productsToCart.find((product) => (product.title === id));
    if (productFound) {
      productsToCart.forEach((product) => {
        if (product.title === id && product.qty > 1) {
          product.qty -= 1;
        }
      });
    }
    localStorage.setItem('products', JSON.stringify(productsToCart));
    let CART_PRODUCTS = null;
    CART_PRODUCTS = JSON.parse(localStorage.getItem('products'));
    this.setState({ productsToCart: CART_PRODUCTS });
  };

  handlerRemoveProduct = (event) => {
    const { id } = event.target;
    const { productsToCart } = this.state;
    const productFound = productsToCart.filter((product) => (product.title !== id));
    localStorage.setItem('products', JSON.stringify(productFound));
    let CART_PRODUCTS = null;
    CART_PRODUCTS = JSON.parse(localStorage.getItem('products'));
    this.setState({ productsToCart: CART_PRODUCTS });
  };

  render() {
    const { productsToCart, emptyCart } = this.state;
    if (emptyCart) {
      return (
        <div>
          <h2>Carrinho de compras</h2>
          {
            productsToCart.map((produto) => (
              <div key={ produto.title }>
                <button
                  data-testid="remove-product"
                  type="submit"
                  id={ produto.title }
                  onClick={ this.handlerRemoveProduct }
                >
                  Remover produto
                </button>
                <h3 data-testid="shopping-cart-product-name">{produto.title}</h3>
                <img src={ produto.thumbnail } alt={ produto.title } />
                <h4>{`R$: ${produto.price}`}</h4>
                <button
                  data-testid="product-increase-quantity"
                  type="submit"
                  onClick={ this.handlerAddQty }
                  id={ produto.title }
                >
                  +
                </button>
                <span>
                  <h4 data-testid="shopping-cart-product-quantity">{produto.qty}</h4>
                </span>
                <button
                  data-testid="product-decrease-quantity"
                  type="submit"
                  id={ produto.title }
                  onClick={ this.handlerSubQty }
                >
                  -
                </button>
              </div>
            ))
          }
        </div>
      );
    }
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        <Link to="/">voltar</Link>
      </div>
    );
  }
}
