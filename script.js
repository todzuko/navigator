$(document).ready(function () {

    function createSlider(sliderNumber, min, max) {
        let sliders = $('.slider');

        let slider = sliders[sliderNumber];
        noUiSlider.create(slider, {
            start: [min, max],
            connect: true,
            step: 1,
            range: {
                'min': min,
                'max': max
            },
            format: wNumb({
                decimals: 0
            })
        });
    }

    createSlider(0, 596970, 2428272);
    createSlider(1, 4, 16);


    $(".mobile-header__sidebar").on('click', '.header-mobile__dropdown', function (evt) {
        evt.preventDefault();
        let options = $(this).find('.dropdown-mobile__options');
        let arrow = $(this).find(".dropdown-mobile__arrow");
        if (options.innerHeight() === 0) {
            options.css('height', "auto");
            arrow.css('transform', "rotate(180deg)");
        } else {
            options.css('height', "0");
            arrow.css('transform', 'rotate(0deg)');
        }
    });

    $(".mobile-menu-button").on('click', function () {
        let sidebar = $('.sidebar');
        let sidebarBg = $('.sidebar-bg');
        if (sidebar.outerWidth() === 0) {
            sidebar.addClass("sidebar_active");
            sidebarBg.addClass('sidebar-bg_active');
            $('.body').css('overflow', 'hidden');
            $('.dropdown-mobile__options').css('height', '0');
            $(".dropdown__arrow").css('transform', 'rotate(0)')
        } else {
            sidebar.removeClass("sidebar_active");
            sidebarBg.removeClass('sidebar-bg_active');
            $('.body').css('overflow-y', 'initial');
        }
    });

    let villageImagesUrl = ["/images/village_card1.png", "/images/village_card2.png", "/images/village_card3.png", "/images/village_card4.png"];
    let villageCardsImage = $('.villages .card__section1');

    for (let i = 0; i < villageCardsImage.length; i++) {
        let card = villageCardsImage.eq(i);
        let imageIndex = i % villageImagesUrl.length;
        card.css('background-image', `url(${villageImagesUrl[imageIndex]})`);
    }

    $(".tabs-navigation__active").each(function () {
        let container = $(this).parent();
        let button = container.find($(".tab-button"));
        $(this).css("width", `${(button.eq(0).outerWidth())}px`);
    })

    $(".tab-button-field").on('click', ".tab-button", function (evt) {
        evt.preventDefault();
        let container = $(this).closest(".tab-button-field");
        let colorBlock = container.find('.tabs-navigation__active');
        //change position of green block
        colorBlock.css('left', `${$(this).position().left}px`);
        colorBlock.css('width', `${($(this).outerWidth())}px`);
        //make active tab inactive
        container.find(".tab_active").removeClass("tab_active");
        container.find(".tab-button_active").removeClass("tab-button_active");
        container.find(".active-top").removeClass("active-top");
        //make current tab active
        $(this).addClass("tab-button_active");
        //find which tab to show and show it
        let index = $(this).index() - 1;
        (container.find('.tab').eq(index)).addClass("tab_active");
        (container.find('.tabs-top').eq(index)).addClass("active-top");
    });

    let glideMulti1 = new Glide('.multi1', {
        type: 'slider',
        bound: false,
        rewind: false,
        keyboard: true,
        gap: 20,
        perView: 3,
        peek: 0,
        breakpoints: {
            990: {
                perView: 2,
            },
            575: {
                perView: 1,
            }
        }
    });
    let glideGallery = new Glide('.gallery', {
        type: 'carousel',
        keyboard: true,
        perView: 1,
    });
    let glideGalleryMobile = new Glide('.gallery-mobile', {
        type: 'carousel',
        keyboard: true,
        perView: 1,
    });
    let infoGallery = new Glide('.info-section__gallery', {
        type: 'carousel',
        keyboard: true,
        perView: 1,
    });

    let infoGalleryMobile = new Glide(".info-mobile__gallery", {
        type: 'carousel',
        keyboard: true,
        perView: 1,
    });

    let companyInfoMobile = new Glide('.blocks-mobile__glide', {
        type: 'carousel',
        keyboard: true,
        perView: 3,
        breakpoints: {
            990: {
                perView: 2,
            },
            570: {
                perView: 1,
            }
        }
    });
    let infoSectionMobile = new Glide('.info-glide', {
        type: 'carousel',
        keyboard: true,
        perView: 3,
        breakpoints: {
            990: {
                perView: 2,
            },
            570: {
                perView: 1,
            }
        }
    });
    let newsGlide = new Glide('.news-glide', {
        type: 'slider',
        bound: false,
        rewind: false,
        keyboard: true,
        perView: 3,
        breakpoints: {
            990: {
                perView: 2,
            },
            600: {
                perView: 1,
            }
        }
    });

    let newsGlide2 = new Glide('.news-glide2', {
        type: 'slider',
        bound: false,
        rewind: false,
        keyboard: true,
        perView: 3,
        breakpoints: {
            990: {
                perView: 2,
            },
            600: {
                perView: 1,
            }
        }
    });

    let newsGlide3 = new Glide('.news-glide3', {
        type: 'slider',
        bound: false,
        rewind: false,
        keyboard: true,
        perView: 3,
        breakpoints: {
            990: {
                perView: 2,
            },
            600: {
                perView: 1,
            }
        }
    });

    let advantageGlide = new Glide(".advantage-glide", {
        type: 'slider',
        bound: false,
        rewind: false,
        keyboard: true,
        perView: 4,
        breakpoints: {
            1280: {
                perView: 3,
            },
            760: {
                perView: 2,
            }
        }
    });

  //  $(".glide").on('change', function () {
    $(".cards-list").bind("DOMSubtreeModified", function() {
        let slides = $(this).find(".glide__slide");
        let active = $(this).find($(".glide__slide--active")).index();
        let slideWidth = $(this).find($(".glide__slide")).innerWidth();
        let screenWidth = $(this).closest(".container-normal").innerWidth();
        let slidesNum = (screenWidth / slideWidth) + 0.5;
        for (let i = 0; i < slides.length; i++) {
            let current = slides.eq(i);
            if (i < active || i > active + slidesNum - 1) {
                current.addClass("glide-slide_overflow");
            } else if (current.hasClass("glide-slide_overflow")) {
                current.removeClass("glide-slide_overflow");
            }
        }
    })

    function galleryBulletsMobile() {
        let slides = $(".company-info-mobile .gallery__slide");
        for (let i = 0; i < slides.length; i++) {
            $(".company-info-mobile .gallery-dots").append(`<li class="glide__bullet" data-glide-dir="=${i}"></li>\n`);
        }
    }

    function galleryBullets() {
        let container = $(".gallery-bullets-container");
        let slides = container.find(".gallery__slide");
        let dots = container.find(".gallery-dots");
        for (let i = 0; i < slides.length; i++) {
            dots.append(`<li class="glide__bullet" data-glide-dir="=${i}"></li>\n`);
        }
    }
    function galleryBulletsAll(container) {
        let slides = $(this).find(".gallery__slide");
        let dots = $(this).find(".gallery-dots");
        for (let i = 0; i < slides.length; i++) {
            dots.append(`<li class="glide__bullet" data-glide-dir="=${i}"></li>\n`);
        }
    }


    glideMulti1.on('run', function(){

    })

    glideMulti1.mount();
    galleryBullets();
    glideGallery.mount();
    galleryBulletsMobile();
    glideGalleryMobile.mount();
    infoGallery.mount();
    infoGalleryMobile.mount();
    advantageGlide.mount();
    companyInfoMobile.mount();
    infoSectionMobile.mount();
    newsGlide.mount();
    newsGlide2.mount();
    newsGlide3.mount();

    $(".phone").mask("+7 (999) 999-99-99", {
        translation: {
            '9': {
                pattern: /[0-9]/
            }
        }
    });

    function popupChange() {
        let popup = $('.popup-call-form');
        let openPopupButton = $('.popup-open-button');
        let closePopupButton = $('.popup-close-button');

        openPopupButton.on('click', function (evt) {
            evt.preventDefault();
            $(".popup-change_2").hide();
            popup.addClass('modal--show');
            $(".overflow-container").css("overflow", "initial");
        });

        closePopupButton.on('click', function (evt) {
            evt.preventDefault();
            popup.removeClass('modal--show');
            $(".popup-change_1").show();
            $(".popup-change_2").hide();
        });
    }

    popupChange();

    $(".form-submitted").hide();

    function changeContent(form) {
        let container = form.closest($(".form-change"));
        form.closest(".form-content").hide();
        container.find(".form-submitted").show();
    }


    $("form[name='subscribe__form']").validate({
        rules: {
            'subscribe-email': {
                required: true,
                email: true
            },
            'subscribe-agreement': {
                required: true
            }
        },
        messages: {
            'subscribe-email': {
                required: "Поле обязательно для заполнения",
                email: "Электронная почта некорректна",
            },
            'subscribe-agreement': {
                required: "Необходимо согласие на обработку",
            }
        },
        errorPlacement: function (error, element) {
            let field = element.parent().find("div.error");
            error.appendTo(field);
        }
    });
    $("[name='subscribe-submit']").on('click', function (evt) {
        evt.preventDefault();
        if (!$("form[name='subscribe__form']").valid()) {
            return;
        }
        changeContent($(this));
    });

    $("form[name='popup__call-form']").validate({
        rules: {
            'popup-phone': {
                required: true, minlength: 18, maxlength: 18,
            },
            'popup-name': {
                required: true,
            },
            'popup-agreement': {
                required: true,
            }
        },
        messages: {
            'popup-phone': {
                required: "Поле обязательно для заполнения",
                minlength: "Введите номер полностью",
                maxlength: "Максимальная длина номера"
            },
            'popup-name': {
                required: "Поле обязательно для заполнения",
            },
            'popup-agreement': {
                required: "Необходимо согласие на обработку",
            }
        },
        errorPlacement: function (error, element) {
            let field = element.parent().find("div.error");
            error.appendTo(field);
        }
    });
    $("[name='popup__call-submit']").on('click', function (evt) {
        if (!$("form[name='popup__call-form']").valid()) {
            return;
        }
        evt.preventDefault();
        changeContent($(this));
    });


    $("form[name='appointment__call-form']").validate({
        rules: {
            'appointment-phone': {
                required: true, minlength: 18, maxlength: 18,
            },
            'appointment-name': {
                required: true,
            },
            'appointment-agreement': {
                required: true,
            }
        },
        messages: {
            'appointment-phone': {
                required: "Поле обязательно для заполнения",
                minlength: "Введите номер полностью",
                maxlength: "Максимальная длина номера"
            },
            'appointment-name': {
                required: "Поле обязательно для заполнения",
            },
            'appointment-agreement': {
                required: "Необходимо согласие на обработку",
            }
        },
        errorPlacement: function (error, element) {
            let field = element.parent().find("div.error");
            error.appendTo(field);
        }

    });

    $("[name='appointment-call-submit']").on('click', function (evt) {
        evt.preventDefault();
        if (!$("form[name='appointment__call-form']").valid()) {
            return;
        }
        changeContent($(this));
    });

    $("form[name='questions__call-form']").validate({
        rules: {
            'questions-phone': {
                required: true, minlength: 18, maxlength: 18,
            },
            'questions-name': {
                required: true,
            },
            'questions-agreement': {
                required: true,
            }
        },
        messages: {
            'questions-phone': {
                required: "Поле обязательно для заполнения",
                minlength: "Введите номер полностью",
                maxlength: "Максимальная длина номера"
            },
            'questions-name': {
                required: "Поле обязательно для заполнения",
            },
            'questions-agreement': {
                required: "Необходимо согласие на обработку",
            }
        },
        errorPlacement: function (error, element) {
            let field = element.parent().find("div.error");
            error.appendTo(field);
        }

    });
    $("[name='questions-call-submit']").on('click', function (evt) {
        evt.preventDefault();
        if (!$("form[name='questions__call-form']").valid()) {
            return;
        }
        changeContent($(this));
    });


    function displaySliderValues(sliderNumber) {
        let slider = $(".slider")[sliderNumber];
        slider.noUiSlider.on('update', function (values, handle) {
            let resBefore = values[0];
            let resAfter = values[1];
            $(".slider-result-before")[sliderNumber].textContent = values[0];
            $(".slider-result-after")[sliderNumber].textContent = values[1];
            if (sliderNumber === 1) {
                $(".tag-before")[0].textContent = getTagText(resBefore);
                $(".tag-after")[0].textContent = getTagText(resAfter);
            }
        });
    }

    function getTagText(number) {
        let res = '';

        if (Math.floor(number % 100 / 10) === 1) {
            res = 'соток';
        } else if (number % 10 === 1) {
            res = 'сотка';
        } else if (number % 10 >= 2 && number % 10 <= 4) {
            res = 'сотки';
        } else {
            res = 'соток';
        }

        return res;
    }

    displaySliderValues(0);
    displaySliderValues(1);


});