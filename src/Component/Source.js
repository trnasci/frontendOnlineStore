import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import { getCategories } from '../services/api';

class Source extends React.Component {
  state = {
    category: [],
  };

  componentDidMount() {
    getCategories()
      .then((result) => this.setState({ category: result }));
  }

  creatCategory = () => {
    const { category } = this.state;
    const a = category.map((element) => (<Category
      key={ element.id }
      category={ element.name }
    />));
    return a;
  };

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
        <aside>
          <ul>
            {this.creatCategory()}
          </ul>
        </aside>
      </div>
 
    );
  }
}

export default Source;
