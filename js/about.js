$(document).ready(function(){
  animateCSS(".home-flip", "flipInX");
  setTimeout(function(){ animateCSS(".about-flip", "flipInX") }, 200);
  setTimeout(function(){ animateCSS(".contact-flip", "flipInX") }, 400);
  animateCSS(".about-me", 'bounceInUp').then((message) => {
    animateCSS(".about-me", 'pulse');
  });  
  setTimeout(function(){ animateCSS(".footer", "bounceInUp") }, 500);
  setTimeout(function(){ animateCSS(".bq-div", "fadeIn") }, 900);
  wait = 1000;
  for (let i = 1; i<=30; i++) {
    setTimeout(function() { animateCSS(".btn"+i, "bounceInUp") }, wait);
    wait+=50;
  };
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
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
  };
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