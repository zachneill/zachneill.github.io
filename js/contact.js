$(document).ready(function(){
  animateCSS(".home-flip", "flipInX");
  setTimeout(function(){ animateCSS(".about-flip", "flipInX") }, 200);
  animateCSS(".get-in-touch", 'bounceInUp').then((message) => {
    animateCSS(".get-in-touch", 'pulse');
  });
  setTimeout(function(){ animateCSS(".contact-flip", "flipInX") }, 400);
  setTimeout(function(){ animateCSS(".email", "fadeInUpBig") }, 1300);
  setTimeout(function(){ animateCSS(".message", "fadeInUpBig") }, 1400);
  setTimeout(function(){ animateCSS(".submitBtn", "fadeInUpBig") }, 1500);
  setTimeout(function(){ animateCSS(".platforms", "bounceInUp") }, 1600);
  wait = 1700;
  for (let i = 1; i<=5; i++) {
    setTimeout(function() { animateCSS(".btn"+i, "bounceInUp") }, wait);
    wait+=50;
  };
  setTimeout(function(){ animateCSS(".footer", "fadeInUpBig") }, 1800);
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
  setTimeout(function(){ 
    animateCSS(".about-flip", 'flipOutX').then((message) => {
      $(".about-flip").addClass("opacity-0");
    }); 
  }, 25);
  setTimeout(function(){ 
    animateCSS(".contact-flip", 'flipOutX').then((message) => {
      $(".contact-flip").addClass("opacity-0");
    }); 
  }, 200);
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

function submitForm() {
  const form = document.querySelector('.submit-form')
  const formData = new FormData(form)
  const url = 'https://formsubmit.io/send/zacharyneill@gmail.com'
  fetch(url,{method: 'POST', body: formData
  }).then(function(){
    console.log("Fetched");
    $(".alert-success").fadeIn();
    $(".alert-danger").fadeOut();
  }).catch(function(){
    console.log("FAILED");
    $(".alert-success").fadeOut();
    $(".alert-danger").fadeIn();
  });
  return false
};
