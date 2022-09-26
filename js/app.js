/*!
 *  v1.0.0
 * Copyright 2022 
 */

$(document).ready(function() {
  $('.accordion-box .accordion-tit').on('click', function() {
    if (
      $(this)
        .parent('li')
        .hasClass('open')
    ) {
      $(this)
        .parent('li')
        .removeClass('open');
    } else {
      $(this)
        .parent('li')
        .addClass('open');
    }
  });
});

$(document).on('click', 'a', function(e) {
  e.preventDefault();
});
