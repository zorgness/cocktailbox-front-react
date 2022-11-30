import * as React from 'react'
import Search from '../components/Search'
import {fireEvent, render, screen } from '@testing-library/react'

test('Search component get name to research', () =>  {

  let submitCocktail;

  const handleSearch = name => {
    submitCocktail = name
  }
  render (<Search handleSearch={handleSearch}  />)

  const mojito = 'mojito'

  const input = screen.getByRole('textbox')
  const submitbuttonElement = screen.getByRole('button')
  fireEvent.change(input, {target: {value: mojito }})
  fireEvent.click(submitbuttonElement)
  expect(submitCocktail).toBe(mojito);

})
