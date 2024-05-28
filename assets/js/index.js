document.getElementById('search').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let products = document.querySelectorAll('#product-list li');

    products.forEach(function(product) {
        let productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(filter)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('product-modal');
    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-name');
    const modalPrice = document.getElementById('modal-price');
    const closeModal = document.getElementsByClassName('close')[0];

    document.querySelectorAll('#product-list li').forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const name = this.dataset.name;
            const price = this.dataset.price;

            modalImg.src = imgSrc;
            modalImg.style.width = '50%';
            modalName.textContent = name;
            modalPrice.textContent = price;

            modal.style.display = 'block';
        });
    });

    closeModal.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
