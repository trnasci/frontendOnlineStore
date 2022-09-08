import React, { Component } from 'react';

export default class Carrinho extends Component {
  render() {
    return (
      <div>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    );
  }
}
