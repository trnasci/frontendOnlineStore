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

  render() {
    const { productsToCart, emptyCart } = this.state;
    if (emptyCart) {
      return (
        <div>
          {
            productsToCart.map((produto) => (
              <div key={ produto.title }>
                <h3 data-testid="shopping-cart-product-name">{produto.title}</h3>
                <img src={ produto.thumnail } alt={ produto.title } />
                <h4>{`R$: ${produto.price}`}</h4>
                <span>
                  <h4 data-testid="shopping-cart-product-quantity">{produto.qty}</h4>
                </span>
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
