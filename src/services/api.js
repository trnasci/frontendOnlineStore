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

export async function getProductById($PRODUCT_ID) {
  const RESPONSE_ITEN_ID = await fetch(`https://api.mercadolibre.com/items/${$PRODUCT_ID}`);
  const DATA_ITEN_ID = RESPONSE_ITEN_ID.json();
  return DATA_ITEN_ID;
}
