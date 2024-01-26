const menuInit = () => {
    if (document.querySelector('.hamburger')) {
        const hamburger = document.querySelector('.hamburger');
        let bodyLockStatus = true;

        hamburger.addEventListener('click', function (e) {
            if (bodyLockStatus) {
                document.documentElement.classList.add('_menu-opened');
                document.documentElement.classList.add('lock');
            } else {
                document.documentElement.classList.remove('_menu-opened');
                document.documentElement.classList.remove('lock');
            }

            bodyLockStatus = !bodyLockStatus;
        });
    }
};

menuInit();
