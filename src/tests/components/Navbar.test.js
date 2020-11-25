import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../../components/Navbar';

test('renders Asteroid text', () => {
    const { getByText } = render(<Navbar />);
    const h2Text = getByText(/Asteroids/i);
    expect(h2Text).toBeInTheDocument();
  });