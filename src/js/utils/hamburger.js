import { bodyLockStatus, bodyLockToggle } from './utils';

const menuInit = () => {
    if (document.querySelector('.hamburger')) {
        const hamburger = document.querySelector('.hamburger');

        hamburger.addEventListener('click', function (e) {
            if (bodyLockStatus) {
                document.documentElement.classList.toggle('_menu-opened');
                bodyLockToggle();
            }
        });
    }
};

menuInit();
