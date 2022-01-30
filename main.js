// ----------- Hamburger button
$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});

// ----------- Accordion class of active
$('.accordion-title').click(function(){
    $(this).toggleClass('accordion-active');
})


// ----------- Typing Animation
var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
  typeSpeed: 100,
  backSpeed: 5,
  backDelay: 1000,
  loop: true,
});