import Swiper from 'swiper';
import 'swiper/css';
import { Pagination, EffectFade } from 'swiper/modules';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

// --------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(Draggable);

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
