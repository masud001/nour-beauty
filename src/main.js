import { space } from "postcss/lib/list";

console.log("Hello from main.js");
// categorySlider
const swiper2 = new Swiper(".categorySlider", {
        // Optional parameters
        direction: "horizontal",
        breakpoints: {
            320: {
                loop: true,
                slidesPerView: 2,
                centeredSlides: true,
                spaceBetween: 50,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                },
                
            480: {
                loop: true,
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 50,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                
                },
               
            640: {
                loop: true,
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 70,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                },
            762: {
                loop: true,
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 70,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                },
            992: {
                loop: true,
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 50,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                },
            1080:{
                loop: true,
                slidesPerView: 5,
                centeredSlides: false,
                spaceBetween: 50,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            },
            1280:{
                loop: false,
                slidesPerView: 6,
                centeredSlides: false,
                spaceBetween: 50,
                navigation: false,
                pagination: false,
            },
        },
        
      }
);
// home slider 
const swiper1 = new Swiper(".homeSlider", {
        // Optional parameters
        direction: "horizontal",
        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }
);
// tab content slider 
const swiper3 = new Swiper(".tabContentSlider", {
        // Optional parameters
        direction: "horizontal",
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          320: {
            centeredSlides: false,
            slidesPerView: 1,
            spaceBetween: 20,
          },
          400: {
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            centeredSlides: false,
            slidesPerView: 3,
            spaceBetween: 35,
          },
          1280: {
            centeredSlides: false,
            slidesPerView: 4,
            spaceBetween: 35,
          },
        },
});
// New product slider 
const swiper4 = new Swiper(".newProductSlider", {
        // Optional parameters
        direction: "horizontal",
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          320: {
            centeredSlides: false,
            slidesPerView: 1,
            spaceBetween: 20,
          },
          400: {
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            centeredSlides: false,
            slidesPerView: 3,
            spaceBetween: 35,
          },
          1280: {
            centeredSlides: false,
            slidesPerView: 5,
            spaceBetween: 35,
          },
        },
});
const swiper5 = new Swiper(".blogSlider", {
        // Optional parameters
        direction: "horizontal",
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          320: {
            centeredSlides: false,
            slidesPerView: 1,
            spaceBetween: 20,
          },
          400: {
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            centeredSlides: false,
            slidesPerView: 3,
            spaceBetween: 35,
          },
          1280: {
            centeredSlides: false,
            slidesPerView: 5,
            spaceBetween: 35,
          },
        },
});

// dynamic tab content js
// Select all tab buttons and contents
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content > div');

// Add click event listener to each button
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');

    // Hide all tab contents
    tabContents.forEach(content => content.classList.add('hidden'));

    // Remove active styles from all buttons
    tabButtons.forEach(btn => btn.classList.remove('font-bold',  'border-black'));

    // Show the target tab content
    document.getElementById(targetTab).classList.remove('hidden');

    // Add active styles to the clicked button
    button.classList.add('font-bold', 'text-black', 'border-black');
  });
});


