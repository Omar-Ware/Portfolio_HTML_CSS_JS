// window.addEventListener('scroll', function(){
//     var navBar = document.querySelector('.navbar');
//     navBar.classList.toggle('.sticky', window.scrollY > 10);

// });

$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 0){
      $('.navbar').addClass("newNav");
    }
    else{
      $('.navbar').removeClass("newNav");
    }

    // owl carousel script
    $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0:{
          items: 1,
          nav: false
        },
        600:{
          items: 2,
          nav: false
        },

        1000:{
          items: 3,
          nav: false
        }
      }
    });
  });
  
  // toggle menu/navbar script
  // $('.menu-btn').click(function(){
  //   $('.navbar.menu').toggle("active");
  // });

});

const navSlide = () =>{
  const burger = document.querySelector('.menu-btn');
  const nav = document.querySelector('.menu');
  const navLinks = document.querySelector('.menu li');

  burger.addEventListener('click', ()=> {
    nav.classList.toggle('active');
    $('.menu-btn i').toggleClass('active');
  });

  // navLinks.forEach((link,index) => {

  // })
};
navSlide();

