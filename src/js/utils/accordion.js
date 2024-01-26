import {
  dataMediaQueries,
  _slideToggle,
  _slideUp,
  _slideDown,
} from './utils.js';

export const accordion = () => {
  const accordionItems = document.querySelectorAll('[data-accordion]');

  if (accordionItems.length) {
    const initAccordion = (accordionItems, matchMedia = false) => {
      accordionItems.forEach(accordionGroup => {
        accordionGroup = matchMedia ? accordionGroup.item : accordionGroup;
        if (matchMedia.matches || !matchMedia) {
          accordionGroup.classList.add('_accordion-init');
          initAccordionBody(accordionGroup);
          accordionGroup.addEventListener('click', setAccordionActions);
        } else {
          accordionGroup.classList.remove('_accordion-init');
          initAccordionBody(accordionGroup, false);
          accordionGroup.removeEventListener('click', setAccordionActions);
        }
      });
    };
    const initAccordionBody = (accordionGroup, hideAccordionBody = true) => {
      let titles = accordionGroup.querySelectorAll('[data-accordion-item]');
      if (titles.length) {
        titles = Array.from(titles).filter(
          item => item.closest('[data-accordion]') === accordionGroup
        );
        titles.forEach(title => {
          if (hideAccordionBody) {
            title.removeAttribute('tabindex');
            if (!title.classList.contains('_accordion-active')) {
              title.nextElementSibling.hidden = true;
            }
          } else {
            title.setAttribute('tabindex', '-1');
            title.nextElementSibling.hidden = false;
          }
        });
      }
    };
    const setAccordionActions = e => {
      const target = e.target;
      if (target.closest('[data-accordion-item]')) {
        const title = target.closest('[data-accordion-item]');
        const group = title.closest('[data-accordion]');
        const isOneActiveItem = group.hasAttribute('data-accordion-one-active');
        const accordionSpeed = group.dataset.accordionSpeed
          ? parseInt(group.dataset.accordionSpeed)
          : 500;

        if (!group.querySelectorAll('._slide').length) {
          if (
            isOneActiveItem &&
            !title.classList.contains('_accordion-active')
          ) {
            hideAccordionBody(group);
          }
          title.classList.toggle('_accordion-active');
          _slideToggle(title.nextElementSibling, accordionSpeed);
        }
        e.preventDefault();
      }
    };
    const hideAccordionBody = accordionGroup => {
      const activeTitle = accordionGroup.querySelector(
        '[data-accordion-item]._accordion-active'
      );
      const accordionSpeed = accordionGroup.dataset.accordionSpeed
        ? parseInt(accordionGroup.dataset.accordionSpeed)
        : 500;
      if (activeTitle && !accordionGroup.querySelectorAll('._slide').length) {
        activeTitle.classList.remove('_accordion-active');
        _slideUp(activeTitle.nextElementSibling, accordionSpeed);
      }
    };
    const accordionClose = document.querySelectorAll('[data-accordion-close]');
    if (accordionClose.length) {
      document.addEventListener('click', function (e) {
        const target = e.target;
        if (!target.closest('[data-accordion]')) {
          accordionClose.forEach(accordionItemClose => {
            const group = accordionItemClose.closest('[data-accordion]');
            const speed = spollersBlock.dataset.accordionSpeed
              ? parseInt(group.dataset.accordionSpeed)
              : 500;
            accordionItemClose.classList.remove('_accordion-active');
            _slideUp(accordionItemClose.nextElementSibling, speed);
          });
        }
      });
    }

    const regItems = Array.from(accordionItems).filter(function (
      item,
      index,
      self
    ) {
      return !item.dataset.accordion.split(',')[0];
    });

    // init regular accordion items
    if (regItems.length) {
      initAccordion(regItems);
    }

    // get accordion items with media queries
    const mdQueriesArray = dataMediaQueries(accordionItems, 'accordion');

    if (mdQueriesArray && mdQueriesArray.length) {
      mdQueriesArray.forEach(mdQueriesItem => {
        // event
        mdQueriesItem.matchMedia.addEventListener('change', function () {
          initAccordion(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        });
        initAccordion(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
      });
    }
  }
};
accordion();
