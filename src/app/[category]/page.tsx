import List from "@/components/List/List";
import { getMovies } from "@/utils/api";

const CategoryPage = async ({ params }: { params: { category: string } }) => {
    const movies = await getMovies(params.category)
    console.log(params.category)

    return (
      <div className='flex items-center flex-col gap-16 pt-12 h-full'>
        <List movies={movies} />
      </div>
    );
};

export default CategoryPage;