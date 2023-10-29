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

    const scrollAmount = 250;
    const scrollAmountMobile = 324;

    function handleArrowClick() {
        let currentScrollAmount = window.innerWidth < 740 ? scrollAmountMobile : scrollAmount;
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

