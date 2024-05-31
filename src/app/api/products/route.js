// app/api/products/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  // Obtener los parámetros de consulta de la URL
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const limit = searchParams.get('limit');

  // Validar los parámetros de consulta
  if (!category || !limit) {
    return NextResponse.json({ message: 'Missing required query parameters: category and limit' }, { status: 400 });
  }

  const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  const CONSUMER_KEY = process.env.NEXT_PUBLIC_CONSUMER_KEY;
  const CONSUMER_SECRET = process.env.NEXT_PUBLIC_CONSUMER_SECRET;

  // Validar la existencia de las variables de entorno
  if (!WORDPRESS_API_URL || !CONSUMER_KEY || !CONSUMER_SECRET) {
    console.error('Environment variables are missing');
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }

  const auth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');

  try {
    const response = await fetch(`${WORDPRESS_API_URL}/products?category=${category}&per_page=${limit}`, {
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Network response was not ok', response.statusText);
      return NextResponse.json({ message: 'Network response was not ok' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}