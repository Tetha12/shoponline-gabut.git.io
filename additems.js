const additems = document.querySelector('.add-items');
const productPlace = document.querySelector('.product');
const addItemsCon = document.querySelector('.container-additems');

// Form
const Varclose = document.querySelector('.close');
const namabarang = document.querySelector('#namabarang');
const harga = document.querySelector('#price');

additems.addEventListener('click', function() {
    addItemsCon.style.display = 'block';
});

Varclose.addEventListener('click', function() {
    addItemsCon.style.display = 'none';
});

// Add Items

const addProduct = document.querySelector('#add-product');

addProduct.addEventListener('click', function() {
    const jenisbarang = document.querySelector('#jenisbarang').value;
    const hargaDalamFormatUang = parseFloat(harga.value).toLocaleString('id-ID');
    let imgSrc = ''

       if (jenisbarang === 'nilai1') {
        imgSrc = 'img/phone.png';
    } else if (jenisbarang === 'nilai2') {
        imgSrc = 'img/laptop.png';
    } else if (jenisbarang === 'nilai3') {
        imgSrc = 'img/smartwatch.png';
    }

    productPlace.innerHTML += `
        <div class="barang">
            <img src="${imgSrc}" alt="" class="image">
            <h4>${namabarang.value}</h4>
            <p value="${harga.value}">IDR. ${hargaDalamFormatUang}</p>
            <button class="buy-product">Buy</button>
        </div>
    `;

    // Membersihkan form setelah produk ditambahkan
    namabarang.value = '';
    harga.value = '';
    jenisbarang.value = '';
    addItemsCon.style.display = 'none';
});
