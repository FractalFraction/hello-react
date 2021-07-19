// Import Testing Framework
import { render, screen } from '@testing-library/react';
// Import js files under test
import Greeting from './Greeting.js';

test('renders learn react link', () => {
  render(<Greeting />);
  const greeting = screen.getByText(/Hello, Colin/i);
  expect(greeting).toBeInTheDocument();
});