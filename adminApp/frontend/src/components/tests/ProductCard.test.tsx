import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';
import fakeProducts from '../../data-sources/fakeProducts';

describe('ProductCard', () => {

  const TEST_PRODUCT = fakeProducts[0];

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<ProductCard product={TEST_PRODUCT} />);
  });

  it('should have the product name', () => {
    const element = screen.getByText(TEST_PRODUCT.name);
    expect(element).toBeInTheDocument();
  });

  it('should have the product image', () => {
    const element = screen.getByRole('img');
    expect(element).toBeInTheDocument();
  });

  it('should have an alt text for the image', () => {
    const element = screen.getByRole<HTMLImageElement>('img');
    expect(element.alt).toBe(TEST_PRODUCT.name + ' image');
  });

  it('should have the product description', () => {
    const element = screen.getByText(TEST_PRODUCT.description);
    expect(element).toBeInTheDocument();
  });

  it('should have the product price', () => {
    const element = screen.getByText(`$${TEST_PRODUCT.price}`);
    expect(element).toBeInTheDocument();
  });

});
