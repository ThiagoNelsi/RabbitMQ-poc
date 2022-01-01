import { render, screen } from '@testing-library/react';
import Header from '../Header';


describe('Header', () => {

    const openNewProductModal = jest.fn();

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Header openNewProductModal={openNewProductModal} />);
    })

    it('should show the page name "products"', () => {
      const element = screen.getByText(/products/i);
      expect(element).toBeInTheDocument();
    });

    it('should have the button "new product"', () => {
        const element = screen.getByRole('button');
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('+ New product');
    });

    it('should call the function "openNewProductModal" on click', () => {
        const element = screen.getByRole('button');
        element.click();
        expect(openNewProductModal).toHaveBeenCalled();
    });
})
