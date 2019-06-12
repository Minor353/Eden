module.exports = function () {
  const formPopup = document.querySelector('.form-popup_wrap');
  const formPopupCross = document.querySelector('.form-popup_cross');
  const formPopupBtn = document.querySelectorAll('.price_btn');

  if (formPopup) {
    for (let i = 0; i < formPopupBtn.length; i++) {
      formPopupBtn[i].addEventListener('click', function (e) {
        e.preventDefault();

        formPopup.classList.add('form-popup_wrap--active');
      })
    }

    formPopupCross.addEventListener('click', function () {
      formPopup.classList.remove('form-popup_wrap--active');
    })
  }
}