import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../app/_components/Button.jsx';

describe('Button component', () => {
  it('renders correctly and displays text', () => {
    render(<Button />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();

    const textEl = screen.getByText(/click me/i);
    expect(textEl).toBeInTheDocument();
  });

  it('applies hover styles correctly', () => {
    render(<Button />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveClass('bg-black');

    fireEvent.mouseOver(buttonElement);

  
    expect(buttonElement).toHaveClass('hover:scale-105');
  });
});
