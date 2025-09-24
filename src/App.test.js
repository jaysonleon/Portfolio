import { render, screen } from "@testing-library/react";

import App from "./App";

test('renders About Me heading', () => {
  render(<App />);
  const heading = screen.getByText(/About Me/i);
  expect(heading).toBeInTheDocument();
});
