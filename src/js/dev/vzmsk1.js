import Swiper from 'swiper';
import 'swiper/css';
import { Pagination, EffectFade } from 'swiper/modules';
import Inputmask from 'inputmask';

// --------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const dragElement = () => {
        if (document.querySelectorAll('[data-draggable]').length) {
            document.querySelectorAll('[data-draggable]').forEach((el) => {});
        }
    };
    dragElement();

    /**
     * inititalizes sliders
     */
    const initSliders = () => {
        if (document.querySelector('.cases__slider')) {
            const casesSlider = new Swiper('.cases__slider', {
                modules: [EffectFade, Pagination],
                speed: 800,
                effect: 'fade',
                allowTouchMove: false,
                fadeEffect: {
                    crossFade: true
                },
                pagination: {
                    el: '.cases__bullets',
                    type: 'bullets',
                    clickable: true
                },
                breakpoints: {
                    768: {
                        allowTouchMove: true
                    }
                }
            });
        }
    };
    initSliders();

    /**
     * adds input mask to input elements with data attributes
     */
    const addInputMask = () => {
        if (document.querySelectorAll('[data-tel-mask]').length) {
            document.querySelectorAll('[data-tel-mask]').forEach((telInput) => {
                Inputmask({ mask: '+7 (999) 999-9999', showMaskOnHover: false, jitMasking: true }).mask(
                    telInput
                );
            });
        }
    };
    addInputMask();

    /**
     * handles click events
     */
    const handleClick = (e) => {
        const target = e.target;

        if (target.closest('.cases__bullets')) {
            e.preventDefault();
        }
    };

    document.addEventListener('click', handleClick);
});
