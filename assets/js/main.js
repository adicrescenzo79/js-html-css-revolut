$(document).ready(function(){
  popUpMenu();
  openNotice();
  closeNotice();
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

function openNotice(){
  var notice = $('footer .notice');
  notice.slideDown();
}

function closeNotice(){
  var close = $('footer .notice .close');
  var notice = $('footer .notice');

  close.click(function(){
    notice.attr('style', 'display:none');
  })
}
