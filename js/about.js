$(document).ready(function(){
  animateCSS(".navbar-brand", "flipInX");
  setTimeout(function(){ animateCSS(".bq-div", "fadeIn") }, 900);
  setTimeout(function() { animateCSS(".footer", "bounceInUp") }, 500);
  wait = 1000;
  for (let i = 1; i<=21; i++) {
    setTimeout(function() { animateCSS(".btn"+i, "bounceInUp") }, wait);
    wait+=50;
  };
  animateCSS(".about-me", 'bounceInUp').then((message) => {
    animateCSS(".about-me", 'pulse');
  });  
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
  animateCSS(".navbar-brand", 'flipOutX').then((message) => {
    $(".navbar-brand").addClass("opacity-0");
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