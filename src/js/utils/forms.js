/**
 * adds actions to form fields
 * @param {object} options object
 */
export function formFieldsInit(options = { viewPass: false }) {
  const formFields = document.querySelectorAll(
    'input[placeholder],textarea[placeholder]'
  );
  if (formFields.length) {
    formFields.forEach(formField => {
      if (!formField.hasAttribute('data-placeholder-nohide')) {
        formField.dataset.placeholder = formField.placeholder;
      }
    });
  }
  document.body.addEventListener('focusin', function (e) {
    const targetElement = e.target;
    if (
      (targetElement.tagName === 'INPUT' &&
        targetElement.type !== 'file' &&
        targetElement.type !== 'checkbox' &&
        targetElement.type !== 'radio' &&
        !targetElement.closest('.quantity') &&
        !targetElement.closest('.input-row')) ||
      targetElement.tagName === 'TEXTAREA'
    ) {
      if (targetElement.dataset.placeholder) {
        targetElement.placeholder = '';
      }
      if (!targetElement.hasAttribute('data-no-focus-classes')) {
        targetElement.classList.add('_form-focus');
        targetElement.parentElement.classList.add('_form-focus');
      }
      targetElement.closest('.input').classList.remove('_filled');
      formValidate.removeError(targetElement);
    }
  });
  document.body.addEventListener('focusout', function (e) {
    const targetElement = e.target;
    if (
      (targetElement.tagName === 'INPUT' &&
        targetElement.type !== 'file' &&
        targetElement.type !== 'checkbox' &&
        targetElement.type !== 'radio' &&
        !targetElement.closest('.quantity') &&
        !targetElement.closest('.input-row')) ||
      targetElement.tagName === 'TEXTAREA'
    ) {
      if (targetElement.dataset.placeholder) {
        targetElement.placeholder = targetElement.dataset.placeholder;
      }
      if (!targetElement.hasAttribute('data-no-focus-classes')) {
        targetElement.classList.remove('_form-focus');
        targetElement.parentElement.classList.remove('_form-focus');
      }
      if (targetElement.hasAttribute('data-validate')) {
        formValidate.validateInput(targetElement);
      }
      if (
        !targetElement.classList.contains('_form-error') &&
        targetElement.value.trim()
      ) {
        targetElement.closest('.input').classList.add('_filled');
      } else {
        targetElement.closest('.input').classList.remove('_filled');
      }
    }
  });

  if (document.querySelectorAll('[data-file-input]').length) {
    document.querySelectorAll('[data-file-input]').forEach(fileInput => {
      formValidate.validateInput(fileInput);
      fileInput.addEventListener('input', function () {
        formValidate.validateInput(fileInput);
      });
    });
  }

  if (options.viewPass) {
    document.addEventListener('click', function (e) {
      let targetElement = e.target;
      if (targetElement.closest('[class*="__viewpass"]')) {
        let inputType = targetElement.classList.contains('_viewpass-active')
          ? 'password'
          : 'text';
        targetElement.parentElement
          .querySelector('input')
          .setAttribute('type', inputType);
        targetElement.classList.toggle('_viewpass-active');
      }
    });
  }
}

// validation var
let formValidate = {
  getErrors(form) {
    let error = 0;
    let formRequiredItems = form.querySelectorAll('*[data-required]');
    if (formRequiredItems.length) {
      formRequiredItems.forEach(formRequiredItem => {
        if (
          (formRequiredItem.offsetParent !== null ||
            formRequiredItem.tagName === 'SELECT') &&
          !formRequiredItem.disabled
        ) {
          error += this.validateInput(formRequiredItem);
        }
      });
    }
    return error;
  },
  validateInput(formRequiredItem) {
    let error = 0;

    if (formRequiredItem.dataset.required === 'email') {
      formRequiredItem.value = formRequiredItem.value.replace(' ', '');
      if (this.emailTest(formRequiredItem)) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    } else if (
      formRequiredItem.type === 'checkbox' &&
      !formRequiredItem.checked
    ) {
      this.addError(formRequiredItem);
      error++;
    } else if (formRequiredItem.type === 'file') {
      const ths = this;
      const reader = new FileReader();

      reader.onload = function (e) {
        const maxSize = Number(formRequiredItem.dataset.fileInput);
        const file = formRequiredItem.files[0];

        if (maxSize && file) {
          const parent = formRequiredItem.closest('.file-input');
          const text = parent.querySelector('[data-file-txt]');
          const name = parent.querySelector('[data-file-name]');
          const extension = parent.querySelector('[data-file-extension]');
          const img = parent.querySelector('[data-file-img]');
          const size = parent.querySelector('[data-file-size]');
          const removeBtn = parent.querySelector('[data-remove-file-btn]');
          const data = {
            name: file.name.split('.').slice(0, -1).join(''),
            size: file.size / 1000000,
            extension: file.name.split('.').pop(),
          };

          img ? (img.src = e.target.result) : null;
          text
            ? (text.innerHTML = `Максимальный размер файла - ${maxSize} мб`)
            : null;
          name ? (name.innerHTML = data.name) : null;
          extension ? (extension.innerHTML = data.extension) : null;
          size ? (size.innerHTML = data.size.toFixed(1)) : null;

          if (data.size > maxSize) {
            parent.classList.add('_error');
            parent.classList.remove('_filled');
            text.innerHTML = 'Большой размер файла';
            ths.addError(formRequiredItem);
          } else {
            parent.classList.remove('_error');
            parent.classList.add('_filled');
            ths.removeError(formRequiredItem);
          }

          if (removeBtn) {
            removeBtn.addEventListener('click', function () {
              parent.classList.remove('_error');
              parent.classList.remove('_filled');
              formRequiredItem.value = '';
              ths.removeError(formRequiredItem);
            });
          }
        }
      };

      if (formRequiredItem.files[0])
        reader.readAsDataURL(formRequiredItem.files[0]);
    } else {
      if (
        !formRequiredItem.value.trim() &&
        !formRequiredItem.hasAttribute('data-static')
      ) {
        this.addError(formRequiredItem);
        error++;
      } else if (formRequiredItem.dataset.validate === 'letters-only') {
        const pattern = /[0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (pattern.test(formRequiredItem.value)) {
          formRequiredItem.dataset.error = ``;
          this.addError(formRequiredItem);
          error++;
        }
      } else {
        this.removeError(formRequiredItem);
      }
    }

    return error;
  },
  addError(formRequiredItem) {
    console.log(formRequiredItem);
    formRequiredItem.classList.add('_form-error');
    formRequiredItem.parentElement.classList.add('_form-error');
    formRequiredItem.parentElement.classList.remove('_filled');
    let inputError =
      formRequiredItem.parentElement.querySelector('.form-error');
    if (inputError) formRequiredItem.parentElement.removeChild(inputError);
    if (formRequiredItem.dataset.error) {
      formRequiredItem.parentElement.insertAdjacentHTML(
        'beforeend',
        `<div class="form-error txt16">${formRequiredItem.dataset.error}</div>`
      );
    }
    if (formRequiredItem.closest('.input_validate')) {
      formRequiredItem.closest('form').classList.add('_error');
    }
  },
  removeError(formRequiredItem) {
    formRequiredItem.classList.remove('_form-error');
    formRequiredItem.parentElement.classList.remove('_form-error');
    if (formRequiredItem.parentElement.querySelector('.form-error')) {
      formRequiredItem.parentElement.removeChild(
        formRequiredItem.parentElement.querySelector('.form-error')
      );
    }
    if (formRequiredItem.closest('.input_validate')) {
      formRequiredItem.closest('form').classList.remove('_error');
    }
  },
  formClean(form) {
    if (!form.hasAttribute('data-save-fields')) {
      form.reset();
      setTimeout(() => {
        let inputs = form.querySelectorAll('input,textarea');
        for (let index = 0; index < inputs.length; index++) {
          const el = inputs[index];
          el.parentElement.classList.remove('_form-focus');
          el.classList.remove('_form-focus');
          formValidate.removeError(el);

          if (el.type && el.type === 'file') {
            el.value = '';
            el.closest('.file-input').classList.remove('_filled');
            el.closest('.file-input').classList.remove('_error');
          }
        }
        let checkboxes = form.querySelectorAll('.checkbox__input');
        if (checkboxes.length > 0) {
          for (let index = 0; index < checkboxes.length; index++) {
            const checkbox = checkboxes[index];
            checkbox.checked = false;
          }
        }
      }, 0);
    }
  },
  emailTest(formRequiredItem) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
      formRequiredItem.value
    );
  },
};

/**
 * adds submit logic
 * @param {object} options object
 */
export function formSubmit(options = { validate: true }) {
  const forms = document.forms;
  if (forms.length) {
    for (const form of forms) {
      form.addEventListener('submit', function (e) {
        const form = e.target;
        formSubmitAction(form, e);
      });
      form.addEventListener('reset', function (e) {
        const form = e.target;
        formValidate.formClean(form);
      });
    }
  }
  async function formSubmitAction(form, e) {
    const error = !form.hasAttribute('data-no-validate')
      ? formValidate.getErrors(form)
      : 0;
    if (error === 0 && !form.querySelector('._form-error')) {
      const ajax = form.hasAttribute('data-ajax');
      if (ajax) {
        e.preventDefault();
        const formAction = form.getAttribute('action')
          ? form.getAttribute('action').trim()
          : '#';
        const formMethod = form.getAttribute('method')
          ? form.getAttribute('method').trim()
          : 'GET';
        const formData = new FormData(form);

        form.classList.add('_sending');
        const response = await fetch(formAction, {
          method: formMethod,
          body: formData,
        });
        if (response.ok) {
          let responseResult = await response.json();
          form.classList.remove('_sending');
          formSent(form, responseResult);
        } else {
          alert('error');
          form.classList.remove('_sending');
        }
      } else if (form.hasAttribute('data-dev')) {
        // in development mode
        e.preventDefault();
        formSent(form);
      }
    } else {
      e.preventDefault();
      const formError = form.querySelector('._form-error');
      if (formError && form.hasAttribute('data-goto-error')) {
        gotoBlock(formError, true, 1000);
      }
    }
  }
  // actions after submitting the form
  function formSent(form, responseResult = ``) {
    // show popup, if popup module is connected and form has setting
    // setTimeout(() => {
    //     if (modules.modal) {
    //         const modal = form.dataset.modalMessage;
    //         modal ? modules.modal.open(modal) : null;
    //     }
    // }, 0);

    // form submit event
    document.dispatchEvent(
      new CustomEvent('formSent', {
        detail: {
          form: form,
        },
      })
    );
    // clean form
    formValidate.formClean(form);
  }
}
