const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
const CONSUMER_KEY = process.env.NEXT_PUBLIC_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.NEXT_PUBLIC_CONSUMER_SECRET;

const authHeaders = new Headers();
authHeaders.set('Authorization', 'Basic ' + btoa(`${CONSUMER_KEY}:${CONSUMER_SECRET}`));

export const fetchProducts = async () => {
  let products = [];
  let page = 1;
  let per_page = 100;

  while (true) {
    const response = await fetch(`${WORDPRESS_API_URL}/products?per_page=${per_page}&page=${page}`, {
      headers: authHeaders,
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Si no hay más productos, sal del bucle
    if (data.length === 0) {
      break;
    }

    // Agrega los productos a la lista de productos
    products = products.concat(data);

    // Incrementa la página para la próxima solicitud
    page++;
  }

  //console.log(products);  // Ahora tienes todos los productos
  return products;
};
