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
      slidesPerView: 2.5,
      spaceBetween: 30,
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
      slidesPerView: 2.5,
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
      slidesPerView: 3.5,
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
      slidesPerView: 4.5,
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
      spaceBetween: 0,
    },
    1280: {
      slidesPerView: 9,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 10,
      spaceBetween: 0,
    },
    1600: {
      slidesPerView: 12,
      spaceBetween: 0,
    },
    1920: {
      slidesPerView: 12,
      spaceBetween: 0,
    },
  },
});
const concernSlider = new Swiper(".concernSlider", {
  direction: "horizontal",
  breakpoints: {
    320: {
      loop: false,
      slidesPerView: 2.5,
      spaceBetween: 30,
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
      slidesPerView: 2.5,
      spaceBetween: 50,
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
      slidesPerView: 3.5,
      spaceBetween: 70,
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
      slidesPerView: 4.5,
      spaceBetween: 70,
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
      spaceBetween: 50,
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
      spaceBetween: 50,
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
      spaceBetween: 50,
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
  slidesPerView: 1.4,
  spaceBetween: 8,
  breakpoints: {
    480: {
      slidesPerView: 1.4,
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
const shopByBrand = new Swiper(".shopByBrand", {
  direction: "horizontal",
  loop: false,
  navigation: {
    nextEl: ".shop-by-brand-next",
    prevEl: ".shop-by-brand-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4.2,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3.6,
      spaceBetween: 30,
    },
  },
});
// home slider
const swiper1 = new Swiper(".homeSlider", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".home-next",
    prevEl: ".home-prev",
  },
});

const featureCards = document.querySelectorAll(
  ".category-feature-section .feature-card[data-youtube-id], .category-feature-section .feature-card[data-local-video-src]"
);

featureCards.forEach((card) => {
  const youtubeId = card.getAttribute("data-youtube-id");
  const localVideoSrc = card.getAttribute("data-local-video-src");

  if (!youtubeId && !localVideoSrc) return;

  const layer = document.createElement("div");
  layer.className = "feature-video-layer";
  card.appendChild(layer);

  let videoElement = null;

  function createVideo() {
    if (videoElement) return;

    if (youtubeId) {
      videoElement = document.createElement("iframe");
      videoElement.src =
        "https://www.youtube.com/embed/" +
        youtubeId +
        "?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&showinfo=0";
      videoElement.allow = "autoplay; encrypted-media; picture-in-picture";
      videoElement.setAttribute("allowfullscreen", "");
    } else if (localVideoSrc) {
      videoElement = document.createElement("video");
      videoElement.src = localVideoSrc;
      videoElement.autoplay = true;
      videoElement.muted = true;
      videoElement.loop = true;
      videoElement.playsInline = true;
      videoElement.controls = false;
      // Ensure the video fits effectively like the iframe
      videoElement.style.width = "100%";
      videoElement.style.height = "100%";
      videoElement.style.objectFit = "cover";
    }

    layer.appendChild(videoElement);
  }

  function destroyVideo() {
    if (!videoElement) return;
    videoElement.remove();
    videoElement = null;
  }

  function play() {
    createVideo();
    card.classList.add("video-playing");
  }

  function stop() {
    destroyVideo();
    card.classList.remove("video-playing");
  }

  card.addEventListener("mouseenter", play);
  card.addEventListener("mouseleave", stop);

  card.addEventListener(
    "touchstart",
    () => {
      if (card.classList.contains("video-playing")) {
        stop();
      } else {
        play();
      }
    },
    { passive: true }
  );
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
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
const swiper003 = new Swiper(".tabContentSlider003", {
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
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
const swiper03 = new Swiper(".tabContentSlider02", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".tab-content-swiper-button-next",
    prevEl: ".tab-content-swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
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
