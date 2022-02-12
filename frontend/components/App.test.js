import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AppFunctional from './AppFunctional'

let leftBtn, downBtn, upBtn, rightBtn, submitBtn, email, resetBtn

beforeEach(() =>{
  render (<AppFunctional/>)
  leftBtn = screen.getByText('LEFT')
  downBtn = screen.getByText('DOWN')
  upBtn = screen.getByText('UP')
  rightBtn = screen.getByText('RIGHT')
  submitBtn = screen.getByText('')
  email = screen.getByPlaceholderText('type email')
  resetBtn = screen.getByText('reset')
})

afterEach(() => {
  document.body.innerHTML = ''
})

test('sanity', () => {
  expect(true).toBe(false)
})

test('clicking up increase the step counter', () => {
  userEvent.click(upBtn)

})

// test('submit return an error with no email is empty', () => {
  
// })

// test('counter resets when the reset button is clicked', () => {
  
// }
// )
// test('typing on the input results in its value changing to the entered text', () => {
  
// })

// test('coordinate x increases when the right button is clicked', () => {
  
// })
