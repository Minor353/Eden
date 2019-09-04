module.exports = function () {
  $('#form').on('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();

    var form = $(e.target),
      data = form.serialize(),
      url = form.attr('action');

    var request = $.ajax({
      type: 'POST',
      url: url,
      data: data
    });

    const popupBlock = document.querySelector('.popup-success');
    const formWrap = document.querySelector('.form-popup_wrap');

    function closePopup() {
      popupBlock.classList.remove('popup-success--active');
      if (formWrap) {
        formWrap.classList.remove('form-popup_wrap--active');
      }
      document.getElementById('form').reset();
    }

    request.done(function (msg) {
      popupBlock.classList.add('popup-success--active');
      setTimeout(closePopup, 2500);
    });

    request.fail(function (jqXHR, textStatus) {
      popupBlock.classList.add('popup-success--active');
      setTimeout(closePopup, 2500);
    })
  };

}