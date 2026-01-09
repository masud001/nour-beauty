// header top slider on mobile view
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide-item");
  let currentSlide = 0;

  if (slides.length > 0) {
    slides[currentSlide].classList.add("active");
  }

  function showNextSlide() {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  if (slides.length > 1) {
    setInterval(showNextSlide, 3000);
  }
});

// categorySlider
const swiper2 = new Swiper(".categorySlider", {
  // Optional parameters
  direction: "horizontal",
  breakpoints: {
    320: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 50,
      navigation: {
        nextEl: ".category-slider-next",
        prevEl: ".category-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },

    480: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 50,
      navigation: {
        nextEl: ".category-slider-next",
        prevEl: ".category-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },

    640: {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 70,
      navigation: {
        nextEl: ".category-slider-next",
        prevEl: ".category-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    762: {
      loop: false,
      slidesPerView: 4,
      spaceBetween: 70,
      navigation: {
        nextEl: ".category-slider-next",
        prevEl: ".category-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    992: {
      loop: false,
      slidesPerView: 4,
      spaceBetween: 50,
      navigation: {
        nextEl: ".category-slider-next",
        prevEl: ".category-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    1080: {
      loop: false,
      slidesPerView: 5,
      spaceBetween: 50,
      navigation: {
        nextEl: ".category-slider-next",
        prevEl: ".category-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    1280: {
      loop: false,
      slidesPerView: 6,
      spaceBetween: 50,
      navigation: {
        nextEl: ".category-slider-next",
        prevEl: ".category-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  },
});
// newCategorySlider
const newCategorySlider = new Swiper(".newCategorySlider", {
  direction: "horizontal",
  loop: false,
  watchOverflow: true,
  initialSlide: 0,
  centeredSlides: false,
  pagination: {
    el: ".newCategorySlider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".newCategorySlider .new-category-next",
    prevEl: ".newCategorySlider .new-category-prev",
  },
  slidesPerView: 3.7,
  spaceBetween: 8,
  breakpoints: {
    480: {
      slidesPerView: 3.7,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 9,
      spaceBetween: 20,
    },
  },
});
const concernSlider = new Swiper(".concernSlider", {
  direction: "horizontal",
  breakpoints: {
    320: {
      loop: false,
      slidesPerView: 2,

      spaceBetween: 20,
      navigation: {
        nextEl: ".concern-slider-next",
        prevEl: ".concern-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    480: {
      loop: false,
      slidesPerView: 3,

      spaceBetween: 20,
      navigation: {
        nextEl: ".concern-slider-next",
        prevEl: ".concern-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    640: {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: ".concern-slider-next",
        prevEl: ".concern-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    762: {
      loop: false,
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: ".concern-slider-next",
        prevEl: ".concern-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    992: {
      loop: false,
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: ".concern-slider-next",
        prevEl: ".concern-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    1080: {
      loop: false,
      slidesPerView: 5,
      spaceBetween: 20,
      navigation: {
        nextEl: ".concern-slider-next",
        prevEl: ".concern-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    1280: {
      loop: false,
      slidesPerView: 6,
      spaceBetween: 20,
      navigation: {
        nextEl: ".concern-slider-next",
        prevEl: ".concern-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  },
});
// featureCardsSlider
const featureCardsSlider = new Swiper(".featureCardsSlider", {
  loop: false,
  slidesPerView: 1.5,
  spaceBetween: 8,
  breakpoints: {
    480: {
      slidesPerView: 1.5,
      spaceBetween: 8,
    },
    640: {
      slidesPerView: 2.1,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 2.3,
      spaceBetween: 8,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 8,
      allowTouchMove: false,
    },
  },
});
// categorySlider
const blogMenu = new Swiper(".blogMenu", {
  // Optional parameters
  direction: "horizontal",
  breakpoints: {
    320: {
      loop: true,
      slidesPerView: 2,

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
      slidesPerView: 2,

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
      navigation: false,
      pagination: false,
    },
    992: {
      loop: true,
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 50,
      navigation: false,
      pagination: false,
    },
    1080: {
      loop: true,
      slidesPerView: 5,
      centeredSlides: false,
      spaceBetween: 50,
      navigation: false,
      pagination: false,
    },
    1280: {
      loop: false,
      slidesPerView: 6,
      centeredSlides: false,
      spaceBetween: 50,
      navigation: false,
      pagination: false,
    },
  },
});
const ingredientSlider = new Swiper(".ingredientSlider", {
  direction: "horizontal",
  breakpoints: {
    320: {
      slidesPerView: 1.4,

      spaceBetween: 16,
      navigation: {
        nextEl: ".ingredient-slider-next",
        prevEl: ".ingredient-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    480: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 18,
      navigation: {
        nextEl: ".ingredient-slider-next",
        prevEl: ".ingredient-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    640: {
      loop: false,
      slidesPerView: 2.5,
      spaceBetween: 24,
      navigation: {
        nextEl: ".ingredient-slider-next",
        prevEl: ".ingredient-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    768: {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 28,
      navigation: {
        nextEl: ".ingredient-slider-next",
        prevEl: ".ingredient-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    1024: {
      loop: false,
      slidesPerView: 4,
      spaceBetween: 32,
      navigation: {
        nextEl: ".ingredient-slider-next",
        prevEl: ".ingredient-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    1280: {
      loop: false,
      slidesPerView: 4,
      spaceBetween: 36,
      navigation: {
        nextEl: ".ingredient-slider-next",
        prevEl: ".ingredient-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  },
});
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
    nextEl: ".home-slider-next",
    prevEl: ".home-slider-prev",
  },
});
// sub category home slider
const subCategoryHomeSlider = new Swiper(".subCategoryHomeSlider", {
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
    nextEl: ".sub-category-home-next",
    prevEl: ".sub-category-home-prev",
  },
});
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
      slidesPerView: "auto",
      spaceBetween: 10,
    },
    400: {
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      centeredSlides: false,
      slidesPerView: 4,
      spaceBetween: 20,
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
// New product slider
const swiper6 = new Swiper(".otherCoustomarBought", {
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
const swiper7 = new Swiper(".productListingTypeOne", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".category-slider-next",
    prevEl: ".category-slider-prev",
  },
  breakpoints: {
    320: {
      centeredSlides: false,
      slidesPerView: 2,
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
const swiper8 = new Swiper(".productListingTypeTwo", {
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
      slidesPerView: 2,
      spaceBetween: 20,
    },
    400: {
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      centeredSlides: false,
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 35,
    },
    1280: {
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
const swiper9 = new Swiper(".productListingTypeThree", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".category-slider-next",
    prevEl: ".category-slider-prev",
  },
  breakpoints: {
    320: {
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    400: {
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      centeredSlides: false,
      slidesPerView: 4,
      spaceBetween: 25,
    },
    1280: {
      centeredSlides: false,
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
const swiper10 = new Swiper(".productListingTypeFour", {
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
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
const swiper5 = new Swiper(".blogSlider", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  pagination: {
    el: ".blog-slider-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".blog-slider-next",
    prevEl: ".blog-slider-prev",
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
      spaceBetween: 20,
    },
    1024: {
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      centeredSlides: false,
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

// dynamic tab content js
// Select all tab buttons and contents
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content > div");
// Add click event listener to each button
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab");

    // Hide all tab contents
    tabContents.forEach((content) => content.classList.add("hidden"));

    // Remove active styles from all buttons
    tabButtons.forEach((btn) =>
      btn.classList.remove("font-bold", "border-black")
    );

    // Show the target tab content
    const activeTab = document.getElementById(targetTab);
    activeTab.classList.remove("hidden");

    // Add active styles to the clicked button
    button.classList.add("font-bold", "text-black", "border-black");

    requestAnimationFrame(() => {
      activeTab.querySelectorAll(".tabContentSlider").forEach((sliderEl) => {
        const swiperInstance = sliderEl.swiper;
        if (!swiperInstance) return;

        swiperInstance.update();
        swiperInstance.navigation?.update?.();
      });
    });
  });
});

// listing overlay show / hide in side product
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".product-with-overlay-listing").forEach((card) => {
    // get trigger button
    const trigger = card.querySelectorAll(".trigger-action");
    const overlay = card.querySelector(".product-overlay-listing");
    const closeBtn = overlay.querySelector(".overlay-close-btn");

    // add event listener to trigger button
    trigger.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        overlay.classList.add("active");
      });
    });
    // add event listener to close button
    closeBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
    });
  });
});
