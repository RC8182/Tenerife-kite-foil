const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
const CONSUMER_KEY = process.env.NEXT_PUBLIC_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.NEXT_PUBLIC_CONSUMER_SECRET;

const authHeaders = new Headers();
authHeaders.set('Authorization', 'Basic ' + btoa(`${CONSUMER_KEY}:${CONSUMER_SECRET}`));

export const fetchProducts = async () => {
  const response = await fetch(`${WORDPRESS_API_URL}/products?category=716&per_page=48`, {
    headers: authHeaders
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

