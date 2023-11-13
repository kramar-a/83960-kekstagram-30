import { HASHTAG_INPUT_CLASS } from './constants.js';

const pristineFormValidator = {
  _pristineConfig : {
    // class of the parent element where the error/success class is added
    classTo: 'img-upload__field-wrapper',
    errorClass: 'img-upload__field-wrapper--error',
    successClass: 'has-success',
    // class of the parent element where error text element is appended
    errorTextParent: 'img-upload__field-wrapper',
    // type of element to create for the error text
    errorTextTag: 'div',
    // class of the error text element
    errorTextClass: 'img-upload__field-wrapper--error'
  },
  _errorMessage: '',
  _getErrorMessage() {
    return pristineFormValidator._errorMessage;
  },
  init(form) {
    this._validateForm = form;
    this._hashtagInput = this._validateForm.querySelector(`.${HASHTAG_INPUT_CLASS}`);
    this.pristine = new Pristine(this._validateForm, this._pristineConfig, true);
    this.pristine.addValidator(this._hashtagInput, this._hashtagInputValidate, pristineFormValidator._getErrorMessage);
  },
  release() {
    this._validateForm = null;
    this._hashtagInput = null;
    this.pristine.destroy();
  },
  _hashtagInputValidate(value) {
    const arrayTags = value.split(' ');
    if (!pristineFormValidator._isCountValid(arrayTags)) {
      pristineFormValidator._errorMessage = 'Количество хэш-тегов не должно превышать 5';
      return false;
    }
    if (!pristineFormValidator._isHashTagsValid(arrayTags)) {
      pristineFormValidator._errorMessage = 'Введён невалидный хэш-тег';
      return false;
    }
    if (!pristineFormValidator._isDuplicateHashtag(arrayTags)) {
      pristineFormValidator._errorMessage = 'Хэш-теги не должны повторяться';
      return false;
    }
    return true;
  },
  _isCountValid(arrayTags) {
    return arrayTags.length <= 5;
  },
  _isHashTagsValid(arrayTags) {
    const regexp = /^#[a-zа-яё0-9]{1,19}$/i;
    let result = true;
    let i = 0;
    while (result && i < arrayTags.length) {
      result = regexp.test(arrayTags[i]);
      i++;
    }
    return result;
  },
  _isDuplicateHashtag(arrayTags) {
    let i = 0;
    let result = false;
    while (!result && i < arrayTags.length - 1) {
      result = arrayTags.includes(arrayTags[i], i + 1);
      i++;
    }
    return !result;
  },
};

export { pristineFormValidator };
