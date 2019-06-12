module.exports = function () {
  const catalogBtn = document.querySelector('.catalog_categories-btn');
  const catalogList = document.querySelector('.catalog_categories');

  if (catalogList) {
    catalogBtn.addEventListener('click', function () {
      catalogList.classList.toggle('catalog_categories--active');
      catalogBtn.classList.toggle('catalog_categories-btn--active');
    });


  }
}