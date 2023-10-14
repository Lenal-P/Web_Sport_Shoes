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

