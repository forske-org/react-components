import React from 'react'

export interface StarRatingProps extends React.ComponentPropsWithoutRef<'div'> {
    testIdPrefix: string
    label: string
    disabled?: boolean
    rating: number
    handleClick: (rating: number) => void
}
