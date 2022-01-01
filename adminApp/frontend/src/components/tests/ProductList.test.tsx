import { render, screen, waitFor } from '@testing-library/react';
import ProductsList from '../ProductsList';
import fakeProducts from '../../data-sources/fakeProducts';

describe('ProductCard', () => {

  let getProducts = jest.fn(() => Promise.resolve(fakeProducts));

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<ProductsList getProducts={getProducts} />);
  });

  it('should call the "getProducts" function on load', async () => {
    await waitFor(() => { expect(getProducts).toHaveBeenCalledTimes(1); });
  });

  it('should have an element with testId=grid', () => {
    const grid = screen.getByTestId('grid');
    expect(grid).toBeInTheDocument();
  });

});
