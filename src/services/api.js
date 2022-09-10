export async function getCategories() {
  const RESPONSE = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const DATA = await RESPONSE.json();
  return DATA;
}

export async function getProductsFromCategoryAndQuery($ID, $QUERY) {
  const RESPONSE = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${$ID}&=${$QUERY}`);

  if ($QUERY !== undefined) {
    const DATA = RESPONSE.json();
    return DATA;
  }

  if ($ID !== undefined) {
    const DATA = RESPONSE.json();
    return DATA;
  }

  return {};
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
