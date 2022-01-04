const products = [
  {
    name: 'Product 1',
    description: 'Description 1',
    image: 'https://picsum.photos/200/200/?random',
    price: 1,
  },
  {
    name: 'Product 2',
    description: 'Description 1',
    image: 'https://picsum.photos/200/200/?random',
    price: 1,
  },
  {
    name: 'Product 3',
    description: 'Description 1',
    image: 'https://picsum.photos/200/200/?random',
    price: 1,
  }
];

const renderProducts = () => {
  products.reverse().forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <img src="${product.image}">
      <div>
        <main>
          <h6>${product.name}</h6>
          <p>${product.description}</p>
        </main>
        <p class="price">$${product.price.toFixed(2)}</p>
      </div>
    `;
    document.querySelector('.products').appendChild(productElement);
  });
}

renderProducts();
