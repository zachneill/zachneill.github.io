$(document).ready(function(){
  animateCSS(".navbar-brand", "flipInX");
  setTimeout(function(){ animateCSS(".email", "fadeInUpBig") }, 300);
  setTimeout(function(){ animateCSS(".message", "fadeInUpBig") }, 400);
  setTimeout(function(){ animateCSS(".submitBtn", "fadeInUpBig") }, 500);
  animateCSS(".get-in-touch", 'bounceInUp').then((message) => {
    animateCSS(".get-in-touch", 'pulse');
  });
  setTimeout(function(){ animateCSS(".footer", "fadeInUpBig") }, 1700);
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