//Delay code from executing until all DOM assets have been loaded
$(document).ready(function() {

// F U N C T I O N S

//Hide the menu list when the page is ready
$(".menu").addClass("visuallyhidden");

//Hide the service descriptions when the page is ready
$(".service-1-description").addClass("visuallyhidden");
$(".service-2-description").addClass("visuallyhidden");
$(".service-3-description").addClass("visuallyhidden");

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

// B I N D I N G S

//On clicking the mobile menu icon, reveal the mobile menu list
$(".menu-icon-holder").click(revealMenu);

//On clicking .service-1-button, reveal .service-1-description
$(".service-1-button").click(revealService1);
//On clicking .service-2-button, reveal .service-2-description
$(".service-2-button").click(revealService2);
//On clicking .service-3-button, reveal .service-3-description
$(".service-3-button").click(revealService3);




});
