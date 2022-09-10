import React, { Component } from 'react';

export default class Carrinho extends Component {
  state = {
    emptyCart: true,
    productsToCart: [],
    quantity: 1,
  };

  componentDidMount() {
    const CART_PRODUCTS = JSON.parse(localStorage.getItem('products'));
    if (CART_PRODUCTS) {
      this.setState({ emptyCart: false });
    }
    this.setState({ productsToCart: CART_PRODUCTS });
  }

  render() {
    const { emptyCart, productsToCart, quantity } = this.state;
    let CART_LIST;
    if (emptyCart === true) {
      CART_LIST = (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    } else {
      CART_LIST = (
        <div>
          {
            productsToCart.map((i) => (
              <div key={ i.title }>
                <h4 data-testid="shopping-cart-product-name">
                  {i.title}
                </h4>
                <img src={ i.thumbnail } alt={ i.title } />
                <h5>{`R$: ${i.price}`}</h5>
                <span data-testid="shopping-cart-product-quantity">
                  {quantity}
                </span>
              </div>
            ))
          }
        </div>
      );
    }
    return (
      <div>
        {
          CART_LIST
        }
      </div>
    );
  }
}
