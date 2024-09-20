import { useState } from 'react'

import { StarRatingProps } from './StarRating.types'
import './StarRating.css'

function StarRating (props: StarRatingProps) {
    const stars = Array.from({ length: 5 }, (_, i) => i + 1)

    const [rating, setRating] = useState(0)

    return (
        <div className={'star_rating'}>
            <span>{props.label}</span>
            {stars.map((star, index) => 
                <button
                    disabled={props.disabled}
                    data-testid={`${props.testIdPrefix}-${index}`}
                    key={star}
                    className={`star_rating__${star <= rating ? 'active' : 'inactive'}`}
                    onClick={() => setRating(star)}
                >
                    <span className='star_rating__star'>★</span>
                </button>
            )}
        </div>
    )
}

export default StarRating;