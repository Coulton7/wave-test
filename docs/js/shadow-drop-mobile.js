document.querySelector(".dropdown-menu li a").addEventListener('click', function(){
  document.querySelector(this).parents(".dropdown").find('.btn').html(document.querySelector(this).text() + ' <span class="caret"></span>');
  document.querySelector(this).parents(".dropdown").find('.btn').val(document.querySelector(this).data('value'));
});
