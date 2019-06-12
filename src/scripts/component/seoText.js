module.exports = function () {
  const textWrap = document.querySelector('.seo-text_content');
  const textWrapBtn = document.querySelector('.seo-text_btn');

  if (textWrap) {
    textWrap.classList.add('seo-text_content--close');

    textWrapBtn.addEventListener('click', function () {
      textWrap.classList.toggle('seo-text_content--close');
      textWrapBtn.classList.toggle('seo-text_btn--active');
    })
  }
}