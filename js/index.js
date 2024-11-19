const API_URL = "http://localhost:5010/products";
async function loadProducts() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();

        const productList = document.getElementById('product-list');
        productList.innerHTML = products.data.map(product => `
            <div class="product-card" data-id="${product.id}" onclick="viewProduct(${product.id})">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price} USD</p>
                  <p>Price: ${product.price} USD</p>
                <p>Description: ${product.description}</p>
                <p>Stock: ${product.stock}</p>
                <p>Rating: ${product.rating}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function viewProduct(id) {
    window.location.href = ` detiles.html?id= ${id}`;
}

loadProducts();

// const API_URL = "http://localhost:5010/products";

// async function loadAllProducts() {
//     try {
//         const response = await fetch(API_URL);
//         const products = await response.json();

//         const productList = document.getElementById('product-list');
//         productList.innerHTML = products.data.map(product => `
//             <div class="product-card">
//                 <h3>ID: ${product.id}</h3>
//                 <img src="${product.image}" alt="${product.name}" class="product-image">
//                 <h3>Name: ${product.name}</h3>
//                 <p>Category: ${product.category}</p>
//                 <p>Price: ${product.price} USD</p>
//                 <p>Description: ${product.description}</p>
//                 <p>Stock: ${product.stock}</p>
//                 <p>Rating: ${product.rating}</p>
//             </div>
//         `).join('');
//     } catch (error) {
//         console.error("Error fetching products:", error);
//     }
// }

// loadAllProducts();



// ///////////////////////////////////////////////////////////////////////



setInterval(function(){
    
    const time = new Date();
const hours = document.getElementById('hou');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

hours.innerHTML = time.getHours();
min.innerHTML = time.getMinutes();
sec.innerHTML = time.getSeconds();

});

// ///////////////////////////////////////////////////////////////////////

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 1500, 
      },
  });


// ////////////////////////////////////////////////////////////////////////





  
  
