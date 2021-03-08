$(document).ready(function () {
  let tabSector = window.location.hash;

  switch (tabSector) {
    case "#ingenieria-de-transito-y-transportes":
      $(".ui-services-tab .tab #ingenieria-de-transito-y-transportes").addClass("active");

      $("html, body").animate(
        {
          scrollTop: $("#ingenieria-de-transito-y-transportes").offset().top,
        },
        2000
      );
      
      break;

    case "#ingenieria-civil":
      $(".ui-services-tab .tab #ingenieria-de-transito-y-transportes").removeClass("active");
      $(".ui-services-tab .tabcontent#tab1").css("display", "none");

      $(".ui-services-tab .tab #agroindustria").addClass("active");
      $(".ui-services-tab .tabcontent#tab2").css("display", "block");

      $(".ui-select-tab-movil__text").html('Agroindustria');
      
      $("html, body").animate(
        {
          scrollTop: $("#ingenieria-civil").offset().top,
        },
        2000
      );

      break;

    case "#medio-ambiente-y-energia":
      $(".ui-services-tab .tab #ingenieria-de-transito-y-transportes").removeClass("active");
      $(".ui-services-tab .tabcontent#tab1").css("display", "none");

      $(".ui-services-tab .tab #reciclaje-y-medio-ambiente").addClass("active");
      $(".ui-services-tab .tabcontent#tab3").css("display", "block");

      $(".ui-select-tab-movil__text").html('Reciclaje y medio ambiente');
      
      $("html, body").animate(
        {
          scrollTop: $("#medio-ambiente-y-energia").offset().top,
        },
        2000
      );
      break;

    case "#arquitectura-y-diseno":
      $(".ui-services-tab .tab #ingenieria-de-transito-y-transportes").removeClass("active");
      $(".ui-services-tab .tabcontent#tab1").css("display", "none");

      $(".ui-services-tab .tab #embalaje-industrial").addClass("active");
      $(".ui-services-tab .tabcontent#tab4").css("display", "block");

      $(".ui-select-tab-movil__text").html('Embalaje industrial');
      
      $("html, body").animate(
        {
          scrollTop: $("#arquitectura-y-diseno").offset().top,
        },
        2000
      );
      break;

    default:
      break;
  }  
  
});

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

