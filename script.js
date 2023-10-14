// Hiển thị ô search khi đang gõ
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('search_Box');
    const searchText = document.getElementById('search_Text');

    searchBox.addEventListener('mouseenter', function() {
        this.classList.add('active');
    });

    searchBox.addEventListener('mouseleave', function() {
        if (searchText.value === '') {
            this.classList.remove('active');
        }
    });

    searchText.addEventListener('input', function() {
        if (this.value.length > 0) {
            searchBox.classList.add('active');
        } else {
            searchBox.classList.remove('active');
        }
    });
});


/* ---------------------- BEGIN SLIDESHOW ---------------------- */
document.addEventListener('DOMContentLoaded', function() {
    const listImages = document.querySelector('.list_images');
    const prevBtn = document.querySelector('.control.prev');
    const nextBtn = document.querySelector('.control.next');
    let currentIndex = 0;

    function showSlide(index) {
        listImages.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
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
});
/* ---------------------- END SLIDESHOW ---------------------- */
