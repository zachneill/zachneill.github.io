$(document).ready(function(){
  setTimeout(reveal, 500);
  animateCSS(".main-title", 'bounceInUp').then((message) => {
    animateCSS(".main-title", 'pulse');
  });
  animateCSS(".bullet-1", "lightSpeedInLeft");
  animateCSS(".bullet-2", "lightSpeedInRight");

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

function reveal(){
  $(".revealer").addClass("transitionOut");
}