import { Movie } from '@/interface/movie.interface'
import Image from 'next/image'
import './MovieCard.css'

interface MovieCardProps {
  movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="card">
      <div className="card__img">
        <Image
          src={movie.image}
          alt={movie.title}
          width={200}
          height={250}
          className="rounded-md"
          style={{ height: '250px' }}
        />
      </div>
      <div className="flex flex-col gap-1 items-center mt-3 justify-center flew">
        <div className="card__content-title font-semibold text-white text-xl">{movie.title}</div>
        <div className="card__content-genre">{movie.genre}</div>
        <div className="card__content-rating">{movie.rating}</div>
        <div className="card__content-release">{movie.release_date}</div>
      </div>
    </div>
  )
}
