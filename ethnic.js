document.getElementById('mobile-menu-btn').addEventListener('mouseenter', function() {
  document.querySelector('.mobile-menu').style.left = '0%';
});

document.querySelector('.mobile-menu').addEventListener('mouseleave', function() {
  this.style.left = '-100%';
});


var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  effect: 'coverflow',
  mousewheel: true,
  slidesPerView: 1,
  spaceBetween: 0, 
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
  },
  speed: 900,
  on: {
    slideNextTransitionStart: function () {
      var activeIndex = this.activeIndex; // Get the index of the currently active slide
      if (activeIndex === 2 || activeIndex === 4 || activeIndex === 5 || activeIndex === 6 ) { // Check if the third slide is active (index starts from 0)
        applyHoverEffects();
      } else {
        removeHoverEffects();
      }
    },
    slidePrevTransitionStart: function () {
      var activeIndex = this.activeIndex; // Get the index of the currently active slide
      if (!(activeIndex === 2 || activeIndex === 4 || activeIndex === 5 || activeIndex === 6 )) { // Check if the third slide is not active (index starts from 0)
        removeHoverEffects();
      }
    },
  },
});

function applyHoverEffects() {
  // Apply hover effects when swiper-slide-3 is active
  document.querySelector('.header-div-3 .img1').style.filter = 'brightness(0) invert(1)';
  document.querySelector('.header-div-3 .img2').style.display = 'none';
  document.querySelector('.header-div-3 .img3').style.display = 'block';
  var svgs = document.querySelectorAll('.header-div-4 svg');

  // Loop through each SVG element and apply the filter
  svgs.forEach(function(svg) {
    svg.style.filter = 'brightness(0) invert(1)';
  });
}

function removeHoverEffects() {
  // Remove hover effects when swiper-slide-3 is not active
  document.querySelector('.header-div-3 .img1').style.filter = 'none';
  document.querySelector('.header-div-3 .img2').style.display = 'block';
  document.querySelector('.header-div-3 .img3').style.display = 'none';
  var svgs = document.querySelectorAll('.header-div-4 svg');

  // Loop through each SVG element and apply the filter
  svgs.forEach(function(svg) {
    svg.style.filter = 'none';
  });
}
