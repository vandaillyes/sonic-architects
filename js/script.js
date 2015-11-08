

function createGoogleMap() {

  //This is the name of the ID where the map will be generated.
  var mapElement = document.getElementById("googleMap");
  //These are the properties of our map
  //Check out more controls at https://developers.google.com/maps/documentation/javascript/controls
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
  //Finally we need to create the map by creating a "new" google map, passing in the mapElement and the mapProperties we just declared.
  var map = new google.maps.Map( mapElement, mapProperties);

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

//Hide the menu list when the page is ready
$(".menu").addClass("visuallyhidden");

//Hide the service descriptions when the page is ready
$(".service-1-description").addClass("visuallyhidden");
$(".service-2-description").addClass("visuallyhidden");
$(".service-3-description").addClass("visuallyhidden");

//Hide the equipment lists when the page is ready
$(".microphones-list").addClass("visuallyhidden");
$(".outboard-list").addClass("visuallyhidden");
$(".control-room-list").addClass("visuallyhidden");
$(".instruments-list").addClass("visuallyhidden");
$(".software-list").addClass("visuallyhidden");
$(".other-list").addClass("visuallyhidden");

/*//Hide the engineer Read More buttons when the page is ready
$(".engineer-button").addClass("visuallyhidden");*/



function revealMenu() {
  $(".menu").toggleClass("visuallyhidden");
}

function revealService1(event) {
  event.preventDefault();
  $(".service-1-description").slideToggle("slow");
}
function revealService2(event) {
  event.preventDefault();
  $(".service-2-description").slideToggle("slow");
}
function revealService3(event) {
  event.preventDefault();
  $(".service-3-description").slideToggle("slow");
}

function revealMicrophones(event) {
  event.preventDefault();
  $(".microphones-list").slideToggle("slow");
  $(".outboard-list, .control-room-list, .instruments-list, .software-list, .other-list").hide();
  if ( $(window).width() >= 550 ) {
    $(".microphones-button > a").css("color", "#66666E");
    $(".outboard-button > a, .control-room-button > a, .instruments-button > a, .software-button > a, .other-button > a").css("color", "#000");
  }
}
function revealOutboard(event) {
  event.preventDefault();
  $(".outboard-list").slideToggle("slow");
  $(".microphones-list, .control-room-list, .instruments-list, .software-list, .other-list").hide();
  if ( $(window).width() >= 550 ) {
    $(".outboard-button > a").css("color", "#66666E");
    $(".microphones-button > a, .control-room-button > a, .instruments-button > a, .software-button > a, .other-button > a").css("color", "#000");
  }
}
function revealControlRoom(event) {
  event.preventDefault();
  $(".control-room-list").slideToggle("slow");
  $(".microphones-list, .outboard-list, .instruments-list, .software-list, .other-list").hide();
  if ( $(window).width() >= 550 ) {
    $(".control-room-button > a").css("color", "#66666E");
    $(".microphones-button > a, .outboard-button > a, .instruments-button > a, .software-button > a, .other-button > a").css("color", "#000");
  }
}
function revealInstruments(event) {
  event.preventDefault();
  $(".instruments-list").slideToggle("slow");
  $(".microphones-list, .outboard-list, .control-room-list, .software-list, .other-list").hide();
  if ( $(window).width() >= 550 ) {
    $(".instruments-button > a").css("color", "#66666E");
    $(".microphones-button > a, .outboard-button > a, .control-room-button > a, .software-button > a, .other-button > a").css("color", "#000");
  }
}
function revealSoftware(event) {
  event.preventDefault();
  $(".software-list").slideToggle("slow");
  $(".microphones-list, .outboard-list, .control-room-list, .instruments-list, .other-list").hide();
  if ( $(window).width() >= 550 ) {
    $(".software-button > a").css("color", "#66666E");
    $(".microphones-button > a, .outboard-button > a, .control-room-button > a, .instruments-button > a, .other-button > a").css("color", "#000");
  }
}
function revealOther(event) {
  event.preventDefault();
  $(".other-list").slideToggle("slow");
  $(".microphones-list, .outboard-list, .control-room-list, .instruments-list, .software-list").hide();
  if ( $(window).width() >= 550 ) {
    $(".other-button > a").css("color", "#66666E");
    $(".microphones-button > a, .outboard-button > a, .control-room-button > a, .instruments-button > a, .software-button > a").css("color", "#000");
  }
}

function revealReadMore() {
  $(".engineer-button").toggleClass("visuallyhidden");
}


function revealEngineer(event) {
  event.preventDefault();
  $(this).closest('.engineer-wrapper').find('.engineer-description').slideToggle("slow");
}


// B I N D I N G S

//On clicking the mobile menu icon, reveal the mobile menu list
$(".menu-icon-holder").click(revealMenu);

//On clicking .service-1-button, reveal .service-1-description
$(".service-1-button").click(revealService1);
//On clicking .service-2-button, reveal .service-2-description
$(".service-2-button").click(revealService2);
//On clicking .service-3-button, reveal .service-3-description
$(".service-3-button").click(revealService3);

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


//On hovering over the .engineer-photo, display .engineer-button
$(".engineer-photo").hover(revealReadMore);

//On clicking .engineer-button, reveal .engineer-description
$(".engineer-button").click(revealEngineer);




});
