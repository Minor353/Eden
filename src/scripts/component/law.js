module.exports = function () {
  const lawWrap = document.querySelector('.law_wrap');
  const lawTabs = document.querySelectorAll('.law-tabs_item');
  const lawItems = document.querySelectorAll('.law-list_item');

  if (lawWrap) {
    lawTabs[0].classList.add('law-tabs_item--active');
    lawItems[0].classList.add('law-list_item--active');

    for (let i = 0; i < lawTabs.length; i++) {
      lawTabs[i].addEventListener('click', function () {
        for (let i = 0; i < lawTabs.length; i++) {
          lawTabs[i].classList.remove('law-tabs_item--active');
          lawItems[i].classList.remove('law-list_item--active');
        }
        lawTabs[i].classList.add('law-tabs_item--active');
        lawItems[i].classList.add('law-list_item--active');
      })
    }
  };
}