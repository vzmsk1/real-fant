document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.header__nav-item-heading');

    items.forEach((item) => {
        item.addEventListener('click', (event) => {
            item.classList.toggle('--active');
        });
    });

    if (document.querySelector('.intro__categories-item')) {
        Array.from(document.querySelectorAll('.intro__categories-item')).forEach((category) => {
            category.addEventListener('click', () => {
                Array.from(document.querySelectorAll('.intro__categories-item')).forEach((category) => {
                    category.classList.remove('--active');
                });

                category.classList.add('--active');
            });
        });
    }
});
