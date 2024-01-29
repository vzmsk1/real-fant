document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.header__nav-item-heading');

    items.forEach((item) => {
        item.addEventListener('click', (event) => {
            item.classList.toggle('--active');
        });
    });
});
