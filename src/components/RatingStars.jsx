import { Star } from 'lucide-react'

export default function RatingStars({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={16}
          className={index < rating ? 'fill-blue-400 text-blue-400' : 'text-slate-500'}
        />
      ))}
    </div>
  )
}
