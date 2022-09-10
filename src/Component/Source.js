import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Source extends React.Component {
  state = {
    category: [],
    search: '',
    productsList: [],
    buttonIsClicked: false,
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
      id={ element.id }
      onClick={ this.handleClickCategory }
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
      buttonIsClicked: true,
    });
  };

  handleClickCategory = async (event) => {
    const { id } = event.target;
    const DATA = await getProductsFromCategoryAndQuery(id);
    const { results } = DATA;
    this.setState({
      productsList: results,
      buttonIsClicked: true,
    });
  };

  handleClickAddToCart = async (title, thumbnail, price) => {
    let productsToCart = [];
    const CART_STORAGE = localStorage.getItem('products');
    if (CART_STORAGE) {
      productsToCart = JSON.parse(localStorage.getItem('products'));
    }
    productsToCart.push({ title, thumbnail, price });
    localStorage.setItem('products', JSON.stringify(productsToCart));
  };

  render() {
    const { productsList, buttonIsClicked } = this.state;

    let searchProducts;
    if (buttonIsClicked === true && productsList.length > 0) {
      searchProducts = productsList.map((i) => (
        <div key={ i.id } data-testid="product">
          <h5>{i.title}</h5>
          <img src={ i.thumbnail } alt={ i.title } />
          <h6>{`R$ ${i.price}`}</h6>
          <button
            type="submit"
            data-testid="product-add-to-cart"
            onClick={ () => this.handleClickAddToCart(i.title, i.thumbnail, i.price) }
          >
            Adicionar ao carrinho
          </button>
        </div>
      ));
    } else if (buttonIsClicked === true && productsList.length === 0) {
      searchProducts = <h4>Nenhum produto foi encontrado</h4>;
    } else {
      searchProducts = <h4>Você ainda não realizou uma busca</h4>;
    }

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
        </aside>
        <div>
          {
            searchProducts
          }
        </div>
      </div>

    );
  }
}

export default Source;
