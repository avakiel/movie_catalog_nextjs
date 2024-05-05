import List from '@/components/List/List';
import { getMovies } from '../../utils/api';

export default async function Catalog() {
    const movies = await getMovies()

    return (
      <div className='flex items-center flex-col gap-16 pt-12 h-full'>
        <List movies={movies} />
      </div>
    );
  }

