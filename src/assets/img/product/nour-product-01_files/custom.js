// $('.parallax-window').parallax({speed: 0.5});

var alert_del = document.querySelectorAll('.alert-del');
alert_del.forEach((x) =>
  x.addEventListener('click', function () {
    x.parentElement.classList.add('hidden');
  })
);

window.onbeforeunload = function() {
    var loader = document.getElementById('loader');
    loader.style.display = 'flex';
};

window.onload = function() {
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
};

function showLoader(){
    var loader = document.getElementById('loader');
    loader.style.display = 'flex';
}

function hideLoader(){
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
}

//menu
$(document).ready(function () {
    $('.menu-icn').click(function () {
        $(".multi-level-menu-wrapper").addClass('menu-sidebar-show');
    });
    $('.menu-close').click(function () {
        $(".multi-level-menu-wrapper").removeClass('menu-sidebar-show');
        if ($('#brand').hasClass('active')) {
            // Remove the "active" class from the div with ID "brand"
            $('#brand').removeClass('active');
        }
    });
});

const multiLevelMenu = document.querySelector(".multi-level-menu-wrapper");
$(document).ready(function () {
    $(".multi-level-menu-wrapper").each(function (index, mlMenu) {
        var subMenuItems = $(mlMenu).find(".hasSubMenu");
        // console.log("subMenuItems", subMenuItems);
        subMenuItems.each(function (i, subMenu) {
            $(subMenu).find(".triggerBrand").on("click", function () {
                var target = $(subMenu).attr("data-target");
                $(target).addClass("active");
            });
        });

        $(".backTrigger").on("click", function () {
            var _backTrigger = this;
            $(_backTrigger).parent(".subMenu").removeClass("active");
        });
        // $('.menu-close').click(function () {
        //     $(".subMenu").removeClass('active');
        // });
    });
});
//menu

$(document).ready(function () {
    $('.add').click(function () {
        var th = $(this).closest('.wrap-box').find('.count');
        th.val(+th.val() + 1);
    });
    $('.sub').click(function () {
        var th = $(this).closest('.wrap-box').find('.count');
        if (th.val() > 1)
            th.val(+th.val() - 1);
    });
});

//more details navigate
$(".more-det").click(function () {
    $('html, body').animate({
        scrollTop: $("#product-details-sect").offset().top
    }, 500);
});

new Swiper(".child-slider", {
    loop: true,
    autoplay:true,
    slidesPerView: 1,
    noSwiping: false
});

new Swiper(".child-slider2", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // centeredSlides: true,
    watchSlidesProgress: true,
    noSwiping: false,
    breakpoints: {
        320: {
            slidesPerView: 2
        },
        480: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        980: {
            slidesPerView: 3
        },
        1280: {
            slidesPerView: 4
        },
        1400: {
            slidesPerView: 4
        }
    }
});


new Swiper(".free_sample_slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // centeredSlides: true,
    watchSlidesProgress: true,
    noSwiping: false,
    breakpoints: {
        320: {
            slidesPerView: 2
        },
        480: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        980: {
            slidesPerView: 3
        },
        1280: {
            slidesPerView: 3
        },
        1400: {
            slidesPerView: 3
        }
    }
});




new Swiper(".child-slider02", {
    loop: true,    
    // slidesPerView: 1,
    spaceBetween: 20,
    // centeredSlides: true,
    watchSlidesProgress: true,
    noSwiping: false,
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
         567: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        980: {
            slidesPerView: 3
        },
        1280: {
            slidesPerView: 4
        }
    }
});


new Swiper(".child-slider_two", {
    loop: true,    
    // slidesPerView: 1,
    spaceBetween: 20,
    // centeredSlides: true,
    watchSlidesProgress: true,
    noSwiping: false,
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
         567: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        980: {
            slidesPerView: 3
        },
        1280: {
            slidesPerView: 3
        }
    }
});

new Swiper(".child-slider3", {
    loop: false,
    slidesPerView: 1,
    // centeredSlides: true,
    watchSlidesProgress: true,
    spaceBetween: 20,
    noSwiping: false,
    breakpoints: {
        480: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        980: {
            slidesPerView: 4
        },
        1280: {
            slidesPerView: 4
        },
        1400: {
            slidesPerView: 5
        }
    }
});


new Swiper(".childer_makup", {
    noSwiping: false,
    loop: true,
    margin:15,
    // centeredSlides: true,
    slidesPerView: 9,
    spaceBetween: 5,
    breakpoints: {
        480: {
            slidesPerView: 5
        },
        768: {
            slidesPerView: 6
        },
        980: {
            slidesPerView: 7
        },
        1280: {
            slidesPerView: 9
        },
        1600: {
            slidesPerView: 11
        }
    },
    navigation: {
        nextEl: ".swiper-color-button-next",
        prevEl: ".swiper-color-button-prev"
    }
});

new Swiper(".child-slider4", {
    noSwiping: false,
    loop: true,
    // centeredSlides: true,
    slidesPerView: 7,
    spaceBetween: 5,
    breakpoints: {
        480: {
            slidesPerView: 6
        },
        768: {
            slidesPerView: 3
        },
        980: {
            slidesPerView: 4
        },
        1280: {
            slidesPerView: 4
        },
        1600: {
            slidesPerView: 6
        }
    },
    navigation: {
        nextEl: ".swiper-color-button-next",
        prevEl: ".swiper-color-button-prev"
    }
});
new Swiper(".child-slider5", {
    noSwiping: false,
    speed: 500,
    loop: false,
    spaceBetween: 0,
    breakpoints: {
        320: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 9
        }
    },
    navigation: {
        nextEl: ".nxt-btn-1",
        prevEl: ".prev-btn-1"
    }
});
new Swiper(".child-slider6", {
    speed: 500,
    loop: false,
    spaceBetween: 0,
    breakpoints: {
        320: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 6
        }
    },
    navigation: {
        nextEl: ".nxt-btn-11",
        prevEl: ".prev-btn-11"
    }
});
new Swiper(".child-slider-horizontal", {
    noSwiping: false,
    speed: 500,
    loop: true,
    // centeredSlides: true,
    watchSlidesProgress: true,
    spaceBetween: 30,
    breakpoints: {
        480: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        980: {
            slidesPerView: 4
        },
        1280: {
            slidesPerView: 3
        },
        1600: {
            slidesPerView: 5
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

new Swiper(".child-slider7", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // centeredSlides: true,
    watchSlidesProgress: true,
    noSwiping: false,
    breakpoints: {
        480: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 3
        },
        980: {
            slidesPerView: 4
        },
        1280: {
            slidesPerView: 4
        },
        1400: {
            slidesPerView: 5
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

if ($('.child-slider8').length > 0) {
    new Swiper(".child-slider8", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 35,
        noSwiping: true,
        breakpoints: {
            480: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            980: {
                slidesPerView: 3
            },
            1280: {
                slidesPerView: 3
            }
        }
    });
}

//main slider
// var menu = ['DISCOVER', 'SKINCARE', 'MAKEUP', 'HAIR', 'FRAGRANCE', 'EDITORIALS'];
var menu = ['', 'SKINCARE', 'MAKEUP', 'HAIR', 'FRAGRANCE', ''];
// var menu = ['DISCOVER', 'SKINCARE', 'MAKEUP', 'HAIR', 'FRAGRANCE', 'BATH & BODY', 'EDITORIALS'];
let lastPushedUrl = '';
var mainMenuSwiper = new Swiper(".mySwiper", {
    autoHeight: false,
    speed: 1300,
    loop: true,
    initialSlide: getInitialSlide(),
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: '.swiper-cust-pag',
        clickable: true,
        renderBullet: function (index, className) {
        if(index==0)
            return '<span class="' + className + ' categoryIds" id="homePageCategoryId_'+index+'" data-index="'+index+'" id="category_'+index+'">' + (menu[index]) + '</span>';
        else if(index==5){
            return '<a href="/editorial" class="editorial_btn categoryIds d-flex flex-column align-items-center" id="editorial_btn" data-index="'+index+'" target="_blank">' + 
                '<small class="shop-text">Explore</small>' +
                '<span class="category-text">' + 'Editorial' + '</span>' + 
            '</a>';

        }
        else
            // return '<span class="' + className + ' categoryIds" id="homePageCategoryId_'+index+'" data-index="'+index+'" id="category_'+index+'">' +"<small class='shop-text'>SHOP </small>"+ (menu[index]) + '</span>';
            return (
                '<span class="' + className + ' categoryIds d-flex flex-column align-items-center" id="homePageCategoryId_' + index + '" data-index="' + index + '" id="category_' + index + '">' +
                  '<small class="shop-text">SHOP</small>' +
                  '<span class="category-text">' + menu[index] + '</span>' +
                '</span>'
              );

        }
    },
    on: {
        init: function () {
            var index = localStorage.getItem('index_click');
            var checkCategoryFunction = setInterval(function() {
                if (typeof get_main_category_name === 'function') {
                    clearInterval(checkCategoryFunction);
                    get_main_category_name(index);
                }
            }, 100); 
        
        }
    }
});

function getInitialSlide(){

    if(urlSelectedCat)
        {    
            var index= menu.indexOf(urlSelectedCat.toUpperCase())
            localStorage.setItem('index_click', index);

            return index
        }
    return 0;
}


mainMenuSwiper.on('slideChange', function () {
    // alert('fds');
    // showLoader();
    var activeBullet = document.querySelector('span.categoryIds.swiper-pagination-bullet-active');
    // console.log("clicked")
    // Check if the element is found
    if (activeBullet) {
        // console.log(activeBullet);
        // Retrieve the data-index attribute value
        var index = activeBullet.getAttribute('data-index');
        // alert(index);
        if(index!="0"&&index!="5"){
            var google_tag_params = {
                ecomm_pagetype: 'category'
            };
            // console.log("-------------------------------------------",index)
            gtag('event', 'page_view', {'send_to': 'AW-16536685992',
                    //   'ecomm_prodid':window.google_tag_params.ecomm_prodid,
                      'ecomm_pagetype': google_tag_params.ecomm_pagetype,
                    //   'ecomm_totalvalue':window.google_tag_params.ecomm_totalvalue
                     });
        }

        localStorage.setItem('index_click', index);
        localStorage.setItem('subCat', '0');
        if(index==5){
            // const newURL = baseUrl+'editorial';
            // history.pushState(null, null, newURL);
            // lastPushedUrl=newURL
            // mainMenuSwiper.slideTo(mainMenuSwiper.previousIndexpreviousIndex);
        }else{
        // console.log(pathname.replace(urlToRem.pathname,''))
        if(!pathname.replace(urlToRem.pathname,'').split("/")[1]||(pathname.replace(urlToRem.pathname,'').split("/")[1]&&pathname.replace(urlToRem.pathname,'').split("/")[1].toUpperCase()!==menu[index]))
        {    
            const newURL = baseUrl+'home/'+menu[index].toLowerCase()+"/"+"all";
            // console.log("here")
            if (menu[index].toLowerCase()==='skincare'){
                $(document).attr("title", "SHOP SKINCARE | Skincare product from Premium Beauty Brands");
                let metaDescription = $('meta[name="description"]');
                if (metaDescription.length) {
                    metaDescription.attr("content", "Elevate your skincare with award-winning formulas, from Korean beauty to global luxury brands. Shop clinically-proven solutions for all skin concerns.");
                } else {
                    // If not present, create and append it
                    $('<meta name="description" content="Elevate your skincare with award-winning formulas, from Korean beauty to global luxury brands. Shop clinically-proven solutions for all skin concerns.">').appendTo('head');
                }
                let metaKeywords = $('meta[name="keywords"]');
                if (metaKeywords.length) {
                    metaKeywords.attr("content", "authentic korean skincare, anti aging products, acne treatment products gcc, vitamin c serum, natural skincare products, sunscreen for arab skin, face moisturizer desert climate, skincare routine dubai weather, authentic skincare brands gcc, best face serum, best korean skincare brands UAE");
                } else {
                    // If not present, create and append it
                    $('<meta name="keywords" content="authentic korean skincare, anti aging products, acne treatment products gcc, vitamin c serum, natural skincare products, sunscreen for arab skin, face moisturizer desert climate, skincare routine dubai weather, authentic skincare brands gcc, best face serum, best korean skincare brands UAE">').appendTo('head');
                }    
            }else if (menu[index].toLowerCase()==='makeup'){
                $(document).attr("title", "SHOP MAKEUP | Trending Makeup Must-Haves from Top Brands");
                let metaDescription = $('meta[name="description"]');
                if (metaDescription.length) {
                    metaDescription.attr("content", "From everyday essentials to statement-making colors, find award-winning formulas from the best beauty brands");
                } else {
                    // If not present, create and append it
                    $('<meta name="description" content="From everyday essentials to statement-making colors, find award-winning formulas from the best beauty brands">').appendTo('head');
                }
                let metaKeywords = $('meta[name="keywords"]');
                if (metaKeywords.length) {
                    metaKeywords.attr("content", "long lasting lip stains, waterproof makeup, Korean makeup gcc, bright lip colours, genuine makeup products, Tiktok lip stains, matte lip stains, authentic korean makeup, gloss lipsticks, lip oils, lip stains, dark circle concealer, nail art, nail stickers, eyebrow serum, glittery eye shadow, eye glitter, cream blush, long lasting blush, wedding makeup products uae");
                } else {
                    // If not present, create and append it
                    $('<meta name="keywords" content="long lasting lip stains, waterproof makeup, Korean makeup gcc, bright lip colours, genuine makeup products, Tiktok lip stains, matte lip stains, authentic korean makeup, gloss lipsticks, lip oils, lip stains, dark circle concealer, nail art, nail stickers, eyebrow serum, glittery eye shadow, eye glitter, cream blush, long lasting blush, wedding makeup products uae">').appendTo('head');
                }    
            }else if (menu[index].toLowerCase()==='hair'){
                $(document).attr("title", "Award-Winning, Cult-Favorite Hair Care from Iconic Brands");
                let metaDescription = $('meta[name="description"]');
                if (metaDescription.length) {
                    metaDescription.attr("content", "Experience pro-grade hair care with cult-favorite brands like Color Wow, Sachajuan, and Living Proof. Discover salon-quality formulas for every hair type.");
                } else {
                    // If not present, create and append it
                    $('<meta name="description" content="Experience pro-grade hair care with cult-favorite brands like Color Wow, Sachajuan, and Living Proof. Discover salon-quality formulas for every hair type.">').appendTo('head');
                }
                let metaKeywords = $('meta[name="keywords"]');
                if (metaKeywords.length) {
                    metaKeywords.attr("content", "anti frizz hair products dubai, hijab friendly hair care, heat protection hair, hair growth products gcc, humidity hair protection uae, hair fall solution middle east, scalp care products dubai, award winning hair care, luxury hair care, colorwow, living proof, salon quality hair care, professional hair care, best hair oil gcc");
                } else {
                    // If not present, create and append it
                    $('<meta name="keywords" content="anti frizz hair products dubai, hijab friendly hair care, heat protection hair, hair growth products gcc, humidity hair protection uae, hair fall solution middle east, scalp care products dubai, award winning hair care, luxury hair care, colorwow, living proof, salon quality hair care, professional hair care, best hair oil gcc">').appendTo('head');
                }    
            }else if (menu[index].toLowerCase()==='fragrance'){
                $(document).attr("title", "Discover Luxury Home & Personal Fragrances");
                let metaDescription = $('meta[name="description"]');
                if (metaDescription.length) {
                    metaDescription.attr("content", "Explore luxury perfumes, from personal to home scents. Shop signature fragrances from Miller Harris, Ajmal, Neom, Zenology, and more.");
                } else {
                    // If not present, create and append it
                    $('<meta name="description" content="Explore luxury perfumes, from personal to home scents. Shop signature fragrances from Miller Harris, Ajmal, Neom, Zenology, and more.">').appendTo('head');
                }
                let metaKeywords = $('meta[name="keywords"]');
                if (metaKeywords.length) {
                    metaKeywords.attr("content", "authentic perfumes dubai online, original fragrances uae shop, luxury perfume brands gcc, arabic perfume collection, genuine designer fragrance dubai, niche perfumes uae, authentic oud fragrance, best perfumes gcc online, long lasting perfume dubai, exclusive fragrances uae, artisanal perfumes, luxury home scents, niche fragrances GCC, Neom aromatherapy, Ajmal Oud scents, premium fragrances");
                } else {
                    // If not present, create and append it
                    $('<meta name="keywords" content="authentic perfumes dubai online, original fragrances uae shop, luxury perfume brands gcc, arabic perfume collection, genuine designer fragrance dubai, niche perfumes uae, authentic oud fragrance, best perfumes gcc online, long lasting perfume dubai, exclusive fragrances uae, artisanal perfumes, luxury home scents, niche fragrances GCC, Neom aromatherapy, Ajmal Oud scents, premium fragrances">').appendTo('head');
                }    
            }
            if(!urlExistsInHistory(newURL)){
                history.pushState(null, null, newURL);
                lastPushedUrl=newURL
            }
        }
        // alert(index);
        // console.log(localStorage.getItem('index_click'));
        // else
            get_main_category_name(index);
        }
    } else {
        hideLoader();
        // localStorage.setItem('index_click', index);
        console.log("Element with class swiper-pagination-bullet-active not found.");
    }
  });


//main slider
function changeSubCatURL(element, subCat){
    var activeBullet = document.querySelector('span.categoryIds.swiper-pagination-bullet-active');
    var index = activeBullet.getAttribute('data-index');
    var links = document.querySelectorAll('.sub-cat');
    // console.log("elem-->", element)

    const newURL = baseUrl+'home/'+menu[index].toLowerCase()+"/"+ subCat;
    if(!urlExistsInHistory(newURL)){
        history.pushState(null, null, newURL);
        lastPushedUrl=newURL
    }
    // links.forEach(function(link) {
    //     link.classList.remove('active');
    // });
    // element.classList.add('active');
    get_main_category_name(index)
}

function urlExistsInHistory(url) {
    return url === lastPushedUrl;
}

//product slider
var swiper = new Swiper(".single-product-slider", {
    speed: 1300,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 1
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
//product slider

//product catg slider
var swiper = new Swiper(".single-product-category", {
    speed: 500,
    loop: false,
    spaceBetween: 0,
    breakpoints: {
        320: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 9
        }
    },
    navigation: {
        nextEl: ".nxt-btn-1",
        prevEl: ".prev-btn-1"
    }
});
//product catg slider

var swiper = new Swiper(".single-product-sub-category", {
    speed: 500,
    loop: false,
    spaceBetween: 0,
    breakpoints: {
        320: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 6
        }
    },
    navigation: {
        nextEl: ".nxt-btn-1",
        prevEl: ".prev-btn-1"
    }
});

//multi product slider
var swiper = new Swiper(".multi-product-slider", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        280: {
            slidesPerView: 2
        },
        480: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        980: {
            slidesPerView: 4
        }
    },
    navigation: {
        nextEl: ".swiper-button-next", // Specify the selector for the next button
        prevEl: ".swiper-button-prev"  // Specify the selector for the previous button
    }
});
//multi product slider

//multi-makeup-product-slider
var swiper1 = new Swiper(".makup-product-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 35,
    breakpoints: {
        480: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        980: {
            slidesPerView: 4
        },
        1280: {
            slidesPerView: 4
        },
        1600: {
            slidesPerView: 6
        }
    }
});



//multi-makeup-product-slider

var swiper1 = new Swiper(".wishlist_slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 35,
    centerMode: true,
    breakpoints: {
        480: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 3
        },
        980: {
            slidesPerView: 3
        },
        1280: {
            slidesPerView: 3
        },
        1600: {
            slidesPerView: 3
        }
    }
});

//product-color-palette-slider
var swiper1 = new Swiper(".product-color-palette-slider", {
    loop: false,
    slidesPerView: 7,
    spaceBetween: 35,
    breakpoints: {
        480: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        980: {
            slidesPerView: 4
        },
        1280: {
            slidesPerView: 4
        },
        1600: {
            slidesPerView: 6
        }
    },
    navigation: {
        nextEl: ".swiper-color-button-next",
        prevEl: ".swiper-color-button-prev"
    }
});
//product-color-palette-slider

//edito-product-slider
var swiper2 = new Swiper(".edito-product-slider", {
    speed: 500,
    loop: false,
    centeredSlides: true,
    spaceBetween: 0,
    breakpoints: {
        480: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        980: {
            slidesPerView: 4
        },
        1280: {
            slidesPerView: 3
        },
        1600: {
            slidesPerView: 3
        }
    }
});
//edito-product-slider


//active menu
$(document).ready(function () {
    $(".bottom-menu ul li a").each(function () {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
});
//active menu







new Swiper(".view-free-sample-2", {
    direction: 'vertical',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 35,
    noSwiping: false,
    breakpoints: {
        480: {
            slidesPerView: 1,
            loop: true
        },
        768: {
            slidesPerView: 1,
            loop: true
        },
        980: {
            slidesPerView: 1,
            loop: true
        },
        1280: {
            slidesPerView: 1,
            loop: true
        }
    }
});
//multi product slider









// 29112023 s

//active menu
$(document).ready(function () {
    $(".bottom-menu ul li a").each(function () {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
});

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


function isMonthValid(event) {
    var charCode = event.which ? event.which : event.keyCode;

    // Check if the entered character is a digit
    if (charCode < 48 || charCode > 57) {
      return false;
    }

    // Get the current value of the input field
    var inputValue = document.getElementById("month").value;

    // Concatenate the entered character to the current value
    var newValue = inputValue + String.fromCharCode(charCode);

    // Check if the new value is within the valid range (1 to 12)
    if (parseInt(newValue) >= 1 && parseInt(newValue) <= 12) {
      return true;
    } else {
      return false;
    }
  }

function validateMobileNumber(input) {
    var mobileNumber = input.value;
    var errorMessage = document.getElementById("error-message");


    if (mobileNumber.length < 9 || mobileNumber.length > 12) {
        $('.cust-nxt-btn').css("background", "rgba(217, 217, 217, 0.3)");
        $('.cust-nxt-btn').css("color","#FFF");
        $('.cust-nxt-btn').css("cursor","default");
        errorMessage.textContent = "Please enter minimum 8 and maximum 11 digit for phone number.";
    } else {
        $('.cust-nxt-btn').css("background","#FFFFFF");
        $('.cust-nxt-btn').css("color","#AD1F1A");
        $('.cust-nxt-btn').css("cursor","pointer");
        errorMessage.textContent = "";
    }
  }