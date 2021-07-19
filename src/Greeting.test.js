// Import Testing Framework
import { render, screen } from '@testing-library/react';
// Import js files under test
import Greeting from './Greeting';

test('renders learn react link', () => {
  render(<App />);
  const greeting = screen.getByText(/Hello, Colin/i);
  expect(greeting).toBeInTheDocument();
});