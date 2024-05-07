
const MovieDetailPage = ({ params }: { params: { slug: string } }) => {

  return (
    <div>
      <h1>Movie Detail Page</h1>
      <p>Movie ID: {params.slug}</p>
      {/* Display movie details */}
    </div>
  );
};

export default MovieDetailPage;