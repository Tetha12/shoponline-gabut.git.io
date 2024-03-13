// Menyimpan keranjang belanja
let cartItems = [];

// Fungsi untuk menambahkan item ke keranjang
function addToCart(item) {
    cartItems.push(item);
    renderCart();
}

// Fungsi untuk menghapus item dari keranjang
function removeFromCart(index) {
    cartItems.splice(index, 1);
    renderCart();
}

// Fungsi untuk menampilkan keranjang belanja
function renderCart() {
    const cartElement = document.querySelector('.cartItem');
    cartElement.innerHTML = '';

    let totalPrice = 0;
    cartItems.forEach((item, index) => {
        totalPrice += item.price;
        cartElement.innerHTML += `
            <div class="item">
                <img src="${item.imgSrc}" alt="" class="image">
                <description>
                <h2>${item.name} </h2>
                <p>IDR. ${item.price.toLocaleString('id-ID')}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
                </description>
            </div>
        `;
    });

    // Menampilkan total harga
    document.getElementById('total').textContent = `Rp. ${totalPrice.toLocaleString('id-ID')}`;
}


const buyButtonsNew = document.querySelectorAll('.product .barang .buy-product');
buyButtonsNew.forEach((button, index) => {
    button.addEventListener('click', () => {
        const productName = document.querySelectorAll('.product .barang h4')[index].textContent;
        const productPrice = parseFloat(document.querySelectorAll('.product .barang p')[index].getAttribute('value'));
        const imgSrc = document.querySelectorAll('.product .barang img')[index].getAttribute('src');
        addToCart({ name: productName, price: productPrice, imgSrc: imgSrc });
    });
});
