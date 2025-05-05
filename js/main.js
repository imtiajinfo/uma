// MixItUp initialization
var mixer = mixitup('#mix-wrapper');

// Active tab highlight
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});
/////happy student section///
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        }
      }
    });
  });
  
  
  


