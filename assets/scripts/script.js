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

  $(".tabs li a").click(function() {

    // Active state for tabs
    $(".tabs li a").removeClass("active");
    $(this).addClass("active");
    
    // Active state for Tabs Content
    $(".tab_content_container > .tab_content_active").removeClass("tab_content_active").fadeOut(200);
    $(this.rel).fadeIn(500).addClass("tab_content_active");
    
  });

  $(".notice button").click(function() {
    $(".notice").hide("slow");
  });

  $(".forms_input").hover(function() {
    $( this ).addClass("form_hover");
  }, function() {
    $( this ).removeClass("form_hover");
  });

});
