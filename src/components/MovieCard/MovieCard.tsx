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
          width={150}
          height={250}
          className="rounded-md"
        />
      </div>
      <div className="card__content">
        <div className="card__content-title"></div>
        <div className="card__content-desc"></div>
      </div>
    </div>
  )
}
