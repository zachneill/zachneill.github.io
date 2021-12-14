$(document).ready(function(){
  animateCSS(".home-flip", "flipInX");
  setTimeout(function(){ animateCSS(".about-flip", "flipInX") }, 200);
  setTimeout(function(){ animateCSS(".contact-flip", "flipInX") }, 400);
  animateCSS(".main-title", 'bounceInUp').then((message) => {
    animateCSS(".main-title", 'pulse');
  });
  setTimeout(function() { animateCSS(".bullet-1", "lightSpeedInLeft"); }, 1000);
  setTimeout(function() { animateCSS(".bullet-2", "lightSpeedInRight"); }, 1200);
  setTimeout(function() { animateCSS(".carousel", "bounceInUp"); }, 1600);
  setTimeout(function() { animateCSS(".current-work", "bounceInUp"); }, 1700);
  wait = 1800;
  for (let i = 1; i<=4; i++) {
    setTimeout(function() { animateCSS(".title"+i, "bounceInUp") }, wait);
    setTimeout(function() { animateCSS(".btn"+i, "bounceInUp") }, wait+50);
    wait+=150;
  };
  setTimeout(function(){ animateCSS(".footer", "bounceInUp") }, 2000);

  var carouselSlides = document.querySelector('#carouselSlides')
  var carousel = new bootstrap.Carousel(carouselSlides, {
    wrap: true,
    pause: false
  });
});

const animateCSS = (element, animation, prefix = 'animate__') => new Promise((resolve, reject) => {  
  const animationName = `${prefix}${animation}`;
  const node = document.querySelector(element);
  node.classList.add(`${prefix}animated`, animationName);
  $(element).removeClass("opacity-0");
  function handleAnimationEnd(event) {
    event.stopPropagation();
    node.classList.remove(`${prefix}animated`, animationName);
    resolve('Animation ended');
  }
  node.addEventListener('animationend', handleAnimationEnd, {once: true});
});

function fadeToPage(page){
  $(".navbar-collapse").collapse('hide');
  $(".footer").addClass("transitionOut");
  animateCSS(".home-flip", 'flipOutX').then((message) => {
    $(".home-flip").addClass("opacity-0");
  });
  animateCSS(".about-flip", 'flipOutX').then((message) => {
    $(".about-flip").addClass("opacity-0");
  });
  animateCSS(".contact-flip", 'flipOutX').then((message) => {
    $(".contact-flip").addClass("opacity-0");
  });
  animateCSS(".all-no-nav", 'bounceOutDown').then((message) => {
    $(".all-no-nav").addClass("opacity-0");
    if (page == "about"){
      location.href = 'about.html';
    } else if (page == "contact"){
      location.href = 'contact.html';
    } else {
      location.href = 'index.html';
    };
  });
};