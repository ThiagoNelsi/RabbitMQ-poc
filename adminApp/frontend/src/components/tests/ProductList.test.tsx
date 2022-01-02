import { render, screen } from '@testing-library/react';
import ProductsList from '../ProductsList';

describe('ProductCard', () => {

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<ProductsList modalIsOpen={false} />);
  });

  it('should have an element with testId=grid', () => {
    const grid = screen.getByTestId('grid');
    expect(grid).toBeInTheDocument();
  });

});
