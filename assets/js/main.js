var funzionalitaBtn = $('header .right a.funzionalita');
var funzionalitaPop = $('header .right .pop-up div.funzionalita')

funzionalitaBtn.mouseenter(function() {
  funzionalitaPop.addClass('active');
})

funzionalitaPop.mouseenter(function() {
  funzionalitaPop.addClass('active');
})


funzionalitaBtn.mouseleave(function() {
  funzionalitaPop.delay(8000).removeClass('active');
})

funzionalitaPop.mouseleave(function() {
  funzionalitaPop.removeClass('active');
})
