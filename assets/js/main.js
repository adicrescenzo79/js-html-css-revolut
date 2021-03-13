$(document).ready(function(){
  popUpMenu();
  btnActivate();
})


// FUNCTIONS
function popUpMenu(){
  var callSub = $('header .right a.call-sub');

  callSub.mouseenter(function() {
    var name = $(this).attr('name');
    var subMenu = $('header .right .pop-up .sub-menu[name=' + name + ']');
    subMenu.addClass('active');
  })

  callSub.mouseleave(function() {
    var name = $(this).attr('name');
    var subMenu = $('header .right .pop-up .sub-menu[name=' + name + ']');
    subMenu.removeClass('active');
  })


  var subMenu = $('header .right .pop-up .sub-menu');

  subMenu.mouseenter(function() {
    $(this).addClass('active');
  })

  subMenu.mouseleave(function() {
    $(this).removeClass('active');
  })
}

function btnActivate(){
  var btn = $('form .btn');
  var tel = $('form [type=tel]');
  if (tel.length > 0) {
    btn.prop('disabled', false).addClass('btn-active');
    console.log(tel.length);
  }

  btn.click( function(){
    console.log(tel.length);
  })
}
