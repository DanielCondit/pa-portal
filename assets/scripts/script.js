$(document).ready(function () {

  function slideMenu() {
    var activeState = $("#menu-container #menu-list").hasClass("menu_active");
    $("#menu-container #menu-list").animate({left: activeState ? "0%" : "-100%"}, 400);
  }
  $("#menu-wrapper").click(function(event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container #menu-list").toggleClass("menu_active");
    slideMenu();

    $("body").toggleClass("overflow-hidden");
  });

  $("#menu-list a").click(function(event) {

   $("#menu-list a").removeClass("menu_active");
   $(this).addClass("menu_active");

   var content = $(this).data('content');

   $("#content_pages .content:not('.hide')").stop().fadeOut('fast', function() {
    $(this).addClass('hide');
    $('#content_pages .content[data-content="'+content+'"]').fadeIn('slow').removeClass('hide');
  });

   $("#hamburger-menu").removeClass("open");
   $("#menu-container #menu-list").toggleClass("menu_active");
   slideMenu();

   $("#splash").hide();
 });

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

});
