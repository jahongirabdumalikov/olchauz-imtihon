const API_URL = "http://localhost:5010/products";

function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

async function loadProductDetails() {
    const productId = getProductIdFromUrl();

    if (!productId) {
        document.getElementById('product-details').innerText = "Product ID not found!";
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${productId}`);
        const product = await response.json();
        console.log(product, 'product');

        const productDetails = document.getElementById('product-details');
        productDetails.innerHTML = `
      <h1>${product.data.name}</h1>
      <p>${product.data.description}</p>
     <img src=${product.data.image} alt="">
      <p>Price: ${product.data.price} USD</p>
      <p>Category: ${product.data.category} USD</p>
                <p>Description: ${product.description}</p>
                <p>Stock: ${product.stock}</p>
                <p>Rating: ${product.rating}</p>
    `;
    } catch (error) {
        console.error("Error fetching product details:", error);
        document.getElementById('product-details').innerText = "Error loading product details!";
    }
}
loadProductDetails();