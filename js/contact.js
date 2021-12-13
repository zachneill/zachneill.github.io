$(document).ready(function(){
  setTimeout(reveal, 500);
  setTimeout(revealEmail, 300);
  setTimeout(revealMessage, 400);
  setTimeout(revealSubmit, 500);
  animateCSS(".get-in-touch", 'bounceInUp').then((message) => {
    animateCSS(".get-in-touch", 'pulse');
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

function reveal(){
  $(".revealer").addClass("transitionOut");
};
function revealSubmit(){
  animateCSS(".submitBtn", "fadeInUpBig");
};
function revealEmail(){
  animateCSS(".email", "fadeInUpBig");
};
function revealMessage(){
  animateCSS(".message", "fadeInUpBig");
};
