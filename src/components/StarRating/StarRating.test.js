import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import StarRating from './StarRating'

test('renders label', () => {
    const { getByText } = render(
        <StarRating label='Star Rating' />
    )

    const labelElement = getByText(/Star Rating/i)
    expect(labelElement).toBeDefined()
})

test('renders 5 stars', () => {
    const { getAllByTestId } = render(
        <StarRating label='Star Rating' />
    )

    const starElements = getAllByTestId('star_rating__star')
    expect(starElements.length).toBe(5)
})

test('handles click', () => {
    const onClick = jest.fn()

    const { getAllByTestId } = render(
        <StarRating label='Star Rating' handleClick={onClick}/>
    )

    const starElements = getAllByTestId('star_rating__star')
    for (let i = 0; i < starElements.length; i++) {
        fireEvent.click(starElements[i])
    }

    expect(onClick).toHaveBeenCalledTimes(starElements.length)
})

test('displays active / inactive', () => {
    const { getAllByTestId } = render(
        <StarRating label='Star Rating' rating={3} />
    )

    const starElements = getAllByTestId('star_rating__star')
    for (let i = 0; i < starElements.length; i++) {
        if (i < 3) {
            expect(starElements[i].classList.contains('star_rating__active')).toBe(true)
        } else {
            expect(starElements[i].classList.contains('star_rating__inactive')).toBe(true)
        }
    }
})
})