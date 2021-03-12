
var callSub = $('header .right a.call-sub');

callSub.mouseenter(function() {
  var name = $(this).attr('name');
  var subMenu = $('header .right .pop-up .sub-menu[name=' + name + ']');
  subMenu.fadeIn('').css("display", "flex");
})

callSub.mouseleave(function() {
  var name = $(this).attr('name');
  var subMenu = $('header .right .pop-up .sub-menu[name=' + name + ']');
  subMenu.fadeOut('').css("display", "flex");
})


var subMenu = $('header .right .pop-up .sub-menu');

subMenu.mouseenter(function() {
  $(this).fadeIn('').css("display", "flex");
})

subMenu.mouseleave(function() {
  $(this).fadeOut('').css("display", "flex");
})
