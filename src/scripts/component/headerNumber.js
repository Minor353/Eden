module.exports = function () {
  const headerNumDecor = document.querySelector('.header_list-item-decor');
  const headerNumBtn = document.querySelector('.header_list-item');
  const headerNumWrap = document.querySelector('.header_contact-list-in');


  headerNumBtn.addEventListener('click', function () {
    headerNumDecor.classList.toggle('header_list-item-decor--active');
    headerNumWrap.classList.toggle('header_contact-list-in--active');
  });
}