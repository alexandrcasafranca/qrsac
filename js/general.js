$(document).ready(function () {
  $(".ui-button-movil").click(function () { 
    $(".ui-nav").addClass("ui-nav--active");
  });

  $(".ui-close").click(function () { 
    $(".ui-nav").removeClass("ui-nav--active");
  });
});