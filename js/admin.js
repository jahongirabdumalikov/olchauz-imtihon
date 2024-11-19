const API_URL = "http://localhost:5010/products";

const productForm = document.getElementById("product-form");
const responseMessage = document.getElementById("response-message");

productForm.addEventListener("submit", async (event) => {
    event.preventDefault(); 

    const formData = new FormData(productForm);

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            body: formData, 
        });

        if (response.ok) {
            const result = await response.json();
            responseMessage.innerHTML = `<span style="color: green;">Mahsulot muvaffaqiyatli qo'shildi! ID: ${result.id}</span>`;
            productForm.reset(); 
        } else {
            responseMessage.innerHTML = `<span style="color: red;">Xato yuz berdi! (${response.status})</span>`;
        }
    } catch (error) {
        console.error("Error:", error);
        responseMessage.innerHTML = `<span style="color: red;">Server bilan aloqa muvaffaqiyatsiz!</span>`;
    }
});
