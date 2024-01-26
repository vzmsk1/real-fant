document.addEventListener('DOMContentLoaded', () => {
    let flag = true;

    const items = document.querySelectorAll('.header__nav-item-heading');

    items.forEach((item) => {
        item.addEventListener('click', (event) => {
            if (flag) {
                item.classList.add('--active');
            } else {
                item.classList.remove('--active');
            }

            flag = !flag;
        });
    });
});
