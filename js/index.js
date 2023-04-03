$(document).ready(function(){

  $('.button_back_call').click(function(){
    $('.back_fixed').fadeIn();
  });
  $('.close_form').click(function(){
    $('.back_fixed').fadeOut();
  });
  $('.js-form-lw').formsLw({
    'color-error-default' : 'white',
    'color-error': 'tomato',
    'number-of-parents': 0,
    'post-file' : 'post.php',
    'emails' : 'email@mail.ru',
    'from' : 'from@mail.ru',
  });
});

