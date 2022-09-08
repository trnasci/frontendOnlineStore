import React from 'react';
import { Link } from 'react-router-dom';


class Source extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="search">
          <input
            name="search"
            type="text"
          />
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
          <Link to="/carrinho" data-testid="shopping-cart-button">Carrinho</Link>
        </label>
      </div>

    );
  }
}

export default Source;
