import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Source extends React.Component {
  state = {
    category: [],
    search: '',
    productsList: [],
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

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      search: value,
    });
  };

  handleClick = async () => {
    const { search } = this.state;
    const DATA = await getProductsFromCategoryAndQuery(search, search);
    const { results } = DATA;
    this.setState({
      productsList: results,
    });
  };

  render() {
    const { productsList } = this.state;

    return (
      <div>
        <label htmlFor="search">
          <input
            data-testid="query-input"
            name="search"
            type="text"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
          <Link to="/carrinho" data-testid="shopping-cart-button">Carrinho</Link>
        </label>
        <aside>
          <ul>
            {this.creatCategory()}
          </ul>
          <div>
            {
              productsList.length > 0
                ? productsList.map((i) => (
                  <div key={ i.id } data-testid="product">
                    <h5>{i.title}</h5>
                    <img src={ i.thumbnail } alt={ i.title } />
                    <h6>{i.price}</h6>
                  </div>
                ))
                : <h3>Nenhum produto foi encontrado</h3>
            }
          </div>

        </aside>
      </div>

    );
  }
}

export default Source;
