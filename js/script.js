// Google Maps for the CONTACT page
function createGoogleMap() {

  //This is the name of the ID where the map will be generated.
  var mapElement = document.getElementById("googleMap");
  //These are the properties of our map
  var mapProperties = {
    //Center of the map using a Latitude and Longitude
    center:new google.maps.LatLng(47.5056983,19.0550394),
    //Set the zoom of the map
    zoom:15,
    //Set the type of the map
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    //Disable mouse scroll-wheel scaling
    scrollwheel: false
  };
  //Create the map by creating a "new" google map, passing in the mapElement and the mapProperties we just declared.
  var map = new google.maps.Map( mapElement, mapProperties);
  //Create the marker
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(47.505673, 19.057636),
  });
  marker.setMap(map);
}

//Delay code from executing until all DOM assets have been loaded
$(document).ready(function() {
//When the document is ready, call createGoogleMap function
if ($("#googleMap").length) {
  createGoogleMap();
}


// F U N C T I O N S

//For EVERY page
//Hide the menu list when the page is ready
$(".menu").addClass("visuallyhidden");

//For the EQUIPMENT page
//Hide the equipment lists when the page is ready
$(".microphones-list").addClass("visuallyhidden");
$(".outboard-list").addClass("visuallyhidden");
$(".control-room-list").addClass("visuallyhidden");
$(".instruments-list").addClass("visuallyhidden");
$(".software-list").addClass("visuallyhidden");
$(".other-list").addClass("visuallyhidden");


//For EVERY page
function revealMenu() {
  $(".menu").toggleClass("visuallyhidden");
}

//For the SERVICES page
function revealService(event) {
  event.preventDefault();
  $(this).closest('.service').find('.service-description').slideToggle("slow");
}
//I found a bug that appeared on resizing the window: the decsription of the services was sometimes hidden
//when it should've been displayed or was displayed when it should've been hidden. This bug only occurred
//under particular circumstances.
//I inserted these 2 resize functions as a workaround.
$( window ).resize(function() {
if ( $(window).width() < 850 ) {
  $(".service-description").css("display", "block");
  }
});
$( window ).resize(function() {
  if ( $(window).width() >= 850 ) {
  $(".service-description").css("display", "none");
  }
});

//For the EQUIPMENT page -- I tried to create the accordion effect in a very basic way
function revealMicrophones(event) {
  event.preventDefault();
  $(".microphones-list").slideToggle("slow");
  if ( $(window).width() >= 550 ) {
    $(".outboard-list, .control-room-list, .instruments-list, .software-list, .other-list").hide();
    $(".microphones-button > a").css("color", "#66666E");
    $(".outboard-button > a, .control-room-button > a, .instruments-button > a, .software-button > a, .other-button > a").css("color", "#000");
  }
}
function revealOutboard(event) {
  event.preventDefault();
  $(".outboard-list").slideToggle("slow");
  if ( $(window).width() >= 550 ) {
    $(".microphones-list, .control-room-list, .instruments-list, .software-list, .other-list").hide();
    $(".outboard-button > a").css("color", "#66666E");
    $(".microphones-button > a, .control-room-button > a, .instruments-button > a, .software-button > a, .other-button > a").css("color", "#000");
  }
}
function revealControlRoom(event) {
  event.preventDefault();
  $(".control-room-list").slideToggle("slow");
  if ( $(window).width() >= 550 ) {
    $(".microphones-list, .outboard-list, .instruments-list, .software-list, .other-list").hide();
    $(".control-room-button > a").css("color", "#66666E");
    $(".microphones-button > a, .outboard-button > a, .instruments-button > a, .software-button > a, .other-button > a").css("color", "#000");
  }
}
function revealInstruments(event) {
  event.preventDefault();
  $(".instruments-list").slideToggle("slow");
  if ( $(window).width() >= 550 ) {
    $(".microphones-list, .outboard-list, .control-room-list, .software-list, .other-list").hide();
    $(".instruments-button > a").css("color", "#66666E");
    $(".microphones-button > a, .outboard-button > a, .control-room-button > a, .software-button > a, .other-button > a").css("color", "#000");
  }
}
function revealSoftware(event) {
  event.preventDefault();
  $(".software-list").slideToggle("slow");
  if ( $(window).width() >= 550 ) {
    $(".microphones-list, .outboard-list, .control-room-list, .instruments-list, .other-list").hide();
    $(".software-button > a").css("color", "#66666E");
    $(".microphones-button > a, .outboard-button > a, .control-room-button > a, .instruments-button > a, .other-button > a").css("color", "#000");
  }
}
function revealOther(event) {
  event.preventDefault();
  $(".other-list").slideToggle("slow");
  if ( $(window).width() >= 550 ) {
    $(".microphones-list, .outboard-list, .control-room-list, .instruments-list, .software-list").hide();
    $(".other-button > a").css("color", "#66666E");
    $(".microphones-button > a, .outboard-button > a, .control-room-button > a, .instruments-button > a, .software-button > a").css("color", "#000");
  }
}

//For the ENGINEERS page
function revealReadMore() {
  $(".engineer-button").toggleClass("visuallyhidden");
}

function revealEngineer(event) {
  event.preventDefault();
  $(this).closest('.engineer-wrapper').find('.engineer-description').slideToggle("slow");
}
//I found a bug that appeared on resizing the window: the decsription of the engineers was sometimes hidden
//when it should've been displayed or was displayed when it should've been hidden. This bug only occurred
//under particular circumstances.
//I inserted these 2 resize functions as a workaround.
$( window ).resize(function() {
if ( $(window).width() < 850 ) {
  $(".engineer-description").css("display", "block");
  }
});
$( window ).resize(function() {
  if ( $(window).width() >= 850 ) {
  $(".engineer-description").css("display", "none");
  }
});


// B I N D I N G S

//For EVERY page
//On clicking the mobile menu icon, reveal the mobile menu list
$(".menu-icon-holder").click(revealMenu);

//For the SERVICES page
//On clicking .service-button, reveal .service-description
$(".service-button").click(revealService);

//For the EQUIPMENT page
//On clicking .microphones-button, reveal .microphones-list
$(".microphones-button").click(revealMicrophones);
//On clicking .outboard-button, reveal .outboard-list
$(".outboard-button").click(revealOutboard);
//On clicking .control-room-button, reveal .control-room-list
$(".control-room-button").click(revealControlRoom);
//On clicking .instruments-button, reveal .instruments-list
$(".instruments-button").click(revealInstruments);
//On clicking .software-button, reveal .software-list
$(".software-button").click(revealSoftware);
//On clicking .other-button, reveal .other-list
$(".other-button").click(revealOther);

//For the ENGINEERS page
//On hovering over the .engineer-photo, display .engineer-button
$(".engineer-photo").hover(revealReadMore);
//On clicking .engineer-button, reveal .engineer-description
$(".engineer-button").click(revealEngineer);


});
