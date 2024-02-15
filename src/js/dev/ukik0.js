import { remToPx } from '../utils/utils';

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

    if (document.querySelector('.attendance')) {
        const container = document.querySelector('.attendance__list');
        const loadButton = document.querySelector('.attendance__button');

        const SHOWN_ITEMS = 4;
        let ITEMS_TO_LOAD = 4;

        loadButton.addEventListener('click', function () {
            const items = container.querySelectorAll('.attendance__item');
            const hiddenItems = Array.from(items).slice(ITEMS_TO_LOAD, ITEMS_TO_LOAD + SHOWN_ITEMS);

            hiddenItems.forEach(function (item) {
                item.style.display = 'none';
            });

            setTimeout(function () {
                hiddenItems.forEach(function (item) {
                    item.style.display = 'block';
                });
            }, 100);

            ITEMS_TO_LOAD += SHOWN_ITEMS;

            if (ITEMS_TO_LOAD >= items.length) {
                loadButton.classList.add('--hidden');
            }
        });
    }

    const wrappers = document.querySelectorAll('.slide-cases__image-wrap');

    wrappers.forEach((wrapper) => {
        wrapper.addEventListener('scroll', ({ target }) => {
            const scrollLeft = target.scrollLeft;
            const parentElement = target;

            const maxScrollLeft = target.scrollWidth - target.clientWidth;
            const scrollPercentage = Math.trunc((scrollLeft / (target.scrollWidth - target.clientWidth)) * 100);

            if (scrollLeft > 0 && scrollLeft < maxScrollLeft) {
                parentElement.style.transform = `translateX(-10rem)`;
            };

            if (scrollLeft <= 15) {
                parentElement.style.transform = `translateX(-2rem)`;
            }

            if (scrollPercentage >= 95) {
                parentElement.style.transform = `translateX(-12rem)`;
            }
        });
    });
});
