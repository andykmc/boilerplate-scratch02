import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

import MyComponent from "./MyComponent";

describe('test',  () => {
  it('testing', () => {
    render(<MyComponent  />)
  
    expect(screen.getAllByText('hello')).toHaveLength(1);
  })
});
