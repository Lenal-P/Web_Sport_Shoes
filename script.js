/* ---------------------- BEGIN SEARCH ---------------------- */
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('search_Box');
    const searchButton = document.getElementById('search_Btn');

    searchBox.addEventListener('input', function() {
        const searchValue = this.value;
        if (searchValue && searchValue.trim() === '') {
            searchButton.style.color = 'black';
        } else {
            searchButton.style.color = 'rgb(104, 220, 255)';
        }
    });
    // ------------------------------------------------------------------------------------
    searchBox.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Ngăn chặn hành động mặc định của Enter (chẳng hạn như gửi biểu mẫu)
            // Thực hiện tìm kiếm ở đây
        }
    });

    searchButton.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của nút
        // Thực hiện tìm kiếm ở đây
    });
});
/* ---------------------- END SEARCH ---------------------- */
/* ---------------------- BEGIN SLIDESHOW ---------------------- */
document.addEventListener('DOMContentLoaded', function() {
    const listImages = document.querySelector('.list_images');
    const prevBtn = document.querySelector('.control.prev');
    const nextBtn = document.querySelector('.control.next');
    const dots = document.querySelectorAll('.dots_container .dot_control');
    let currentIndex = 0;

    function showSlide(index) {
        listImages.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function showNextSlide() {
        if (currentIndex < listImages.children.length - 1) {
            showSlide(currentIndex + 1);
        } else {
            showSlide(0);
        }
    }

    function showPrevSlide() {
        if (currentIndex > 0) {
            showSlide(currentIndex - 1);
        } else {
            showSlide(listImages.children.length - 1);
        }
    }

    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);

    setInterval(showNextSlide, 5000);

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
        });
    });
});
/* ---------------------- END SLIDESHOW ---------------------- */
/* ---------------------- BEGIN CONTENT ---------------------- */
document.addEventListener('DOMContentLoaded', function() {
    const productImages = document.querySelector('.product_images');
    const prevArrow = document.querySelector('.arrow.prev');
    const nextArrow = document.querySelector('.arrow.next');

    const scrollAmount = productImages.offsetWidth * 0.2;
    const scrollAmountMobile = productImages.offsetWidth * 0.5; // 50% của kích thước của .product_images

    function handleArrowClick() {
        let currentScrollAmount = window.innerWidth < 1366 ? scrollAmountMobile : scrollAmount;
        let scrollDirection = this.classList.contains('prev') ? -currentScrollAmount : currentScrollAmount;

        let newPosition = productImages.scrollLeft + scrollDirection;

        if (newPosition >= productImages.scrollWidth) {
            productImages.scrollLeft = 0;
        } else if (newPosition < 0) {
            productImages.scrollLeft = productImages.scrollWidth - productImages.clientWidth;
        } else {
            productImages.scrollBy({
                left: scrollDirection,
                behavior: 'smooth'
            });
        }
    }
    prevArrow.addEventListener('click', handleArrowClick);
    nextArrow.addEventListener('click', handleArrowClick);
});
/* ---------------------- END CONTENT ---------------------- */
/* ---------------------- BEGIN CART ---------------------- */
document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử DOM cần thiết
    const checkboxes = document.querySelectorAll('.checkbox');
    const quantityInputs = document.querySelectorAll('.quantity');
    const minusButtons = document.querySelectorAll('.btn_Quantity.minus');
    const plusButtons = document.querySelectorAll('.btn_Quantity.plus');
    const totalPrices = document.querySelectorAll('.total_price');
    const removeButtons = document.querySelectorAll('.remove_item');
    const summaryTotal = document.querySelector('.cart_summary .total_price');

    // Cập nhật tổng tiền
    function updateTotalPrice() {
        let totalPrice = 0;
        totalPrices.forEach(price => {
            totalPrice += parseFloat(price.textContent.replace('đ', '').replace('.', ''));
        });
        summaryTotal.textContent = totalPrice.toLocaleString() + 'đ';
    }

    // Bắt sự kiện khi checkbox thay đổi
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            let isChecked = this.checked;
            let price = parseFloat(totalPrices[index].textContent.replace('đ', '').replace('.', ''));
            totalPrices[index].textContent = isChecked ? price.toLocaleString() + 'đ' : '0đ';
            updateTotalPrice();
        });
    });

    // Bắt sự kiện khi nút trừ được click
    minusButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            let quantity = parseInt(quantityInputs[index].textContent);
            if (quantity > 1) {
                quantityInputs[index].textContent = quantity - 1;
                totalPrices[index].textContent = (quantity - 1) * parseFloat(totalPrices[index].textContent.replace('đ', '').replace('.', '')) + 'đ';
                updateTotalPrice();
            }
        });
    });

    // Bắt sự kiện khi nút cộng được click
    plusButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            let quantity = parseInt(quantityInputs[index].textContent);
            quantityInputs[index].textContent = quantity + 1;
            totalPrices[index].textContent = (quantity + 1) * parseFloat(totalPrices[index].textContent.replace('đ', '').replace('.', '')) + 'đ';
            updateTotalPrice();
        });
    });

    // Bắt sự kiện khi nút xóa được click
    removeButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            this.closest('tr').remove();
            updateTotalPrice();
        });
    });
});
/* ---------------------- END CART ---------------------- */