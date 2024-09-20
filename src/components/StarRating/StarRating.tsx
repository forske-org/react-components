import { StarRatingProps } from './StarRating.types'
import './StarRating.css'

export default function StarRating (props: StarRatingProps) {
    const stars = Array.from({ length: 5 }, (_, i) => i + 1)

    return (
        <div className={'star_rating'}>
            <span>{props.label}</span>
            {stars.map((star, index) => 
                <button
                    disabled={props.disabled}
                    data-testid={`star_rating__star`}
                    key={star}
                    className={`star_rating__${star <= props.rating ? 'active' : 'inactive'}`}
                    onClick={() => props.handleClick(star)}
                >
                    <span className='star_rating__star'>★</span>
                </button>
            )}
        </div>
    )
}
