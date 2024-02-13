import { bodyLockToggle } from './utils';

const menuInit = () => {
    if (document.querySelector('.hamburger')) {
        const hamburgers = document.querySelectorAll('.hamburger');

        hamburgers.forEach((hamburger) => {
            hamburger.addEventListener('click', function () {
                document.documentElement.classList.toggle('_menu-opened');

                const isLocked = document.documentElement.classList.contains('lock');

                bodyLockToggle();

                Array.from(document.querySelectorAll('[data-parent]'), (item) => {
                    item.style.opacity = isLocked ? 1 : 0;
                });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }
};

menuInit();
