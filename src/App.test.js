// Import Testing Framework
import { render, screen } from '@testing-library/react';
// Import js files under test
import App from './App';

test('renders greeting in the app page', () => {
  render(<App />);
  const greeting = screen.getByText(/Hello, Colin/i);
  expect(greeting).toBeInTheDocument();
});
