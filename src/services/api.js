export async function getCategories() {
  const RESPONSE = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const DATA = await RESPONSE.json();
  return DATA;
}

export async function getProductsFromCategoryAndQuery($ID, $QUERY) {
  const RESPONSE_QUERY = await fetch(` https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`);
  const RESPONSE_ID = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${$ID}`);

  if ($QUERY !== undefined) {
    const DATA_QUERY = RESPONSE_QUERY.json();
    return DATA_QUERY;
  }

  if ($ID !== undefined) {
    const DATA_ID = RESPONSE_ID.json();
    return DATA_ID;
  }

  return {};
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
