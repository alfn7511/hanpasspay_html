/*!
 *  v1.0.0
 * Copyright 2022
 */

$(document).ready(function () {
  $('.accordion-box .accordion-tit').on('click', function () {
    const $item = $(this).parent('li');
    if ($item.hasClass('open')) {
      $item.removeClass('open');
    } else {
      $('.accordion-box li').removeClass('open');
      $item.addClass('open');
      window.scrollTo(0, 0);
    }
  });
});

$(document).on('click', 'a', function (e) {
  e.preventDefault();
});
