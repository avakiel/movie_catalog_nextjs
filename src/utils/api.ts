import { Movie } from '@/interface/movie.interface'
import { json } from 'node:stream/consumers'

export async function getMovies(params: string) {
  const response = await fetch(`http://localhost:3005/${params}`, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}