// jquery sub navigation
$(document).ready(function(){
  $('#nav-work').on('mouseover',function(){
    var $subWork = $('<ul class="subNav"><ul/>');
    var $subArch = $('<li class="subNavItem>Architecture<li/>');
    var $subUx = $('<li class="subNavItem>UI / UX<li/>');

    $('ul.subNav').append($subArch);
    $('ul.subNav').append($subUX);
  });
});
