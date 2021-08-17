/// loading website

jQuery(window).load(function () {

    // PAGE LOADER

    $(".loader").fadeOut(500,function(){

        $(".loading").delay(1000).fadeOut(500);

        $("body").css("overflow-y", "auto");

    });

    var Height = window.innerHeight;

    $(".banner_image, #owl_img img").height(Height);

    if ($(window).width() < 767) {
        $(".section_nav").addClass('go');
        $('#nav-icon3').removeClass('open');
        $('.body_section').removeClass('space_section');
    }

    // ANIMATION

    Animate_box();
    $(document).scroll(function (){
        Animate_box();
    });

    function Animate_box() {
        var scroll_var = $(this).scrollTop();

        $('.animate-box').each(function (){
            var val_one = $(this).offset().top - $(window).height() + 80;

            if (scroll_var > val_one){
                if($(this).hasClass('left-in')) {
                    $(this).addClass('animated fadeInLeft');
                }else if($(this).hasClass('right-in')) {
                    $(this).addClass('animated fadeInRight');
                }else {
                    $(this).addClass('animated fadeInUp');
                }
            }
        });
    }

});

$('#file-upload').change(function() {
    var i = $(this).prev('label').clone();
    var file = $('#file-upload')[0].files[0].name;
    $(this).prev('label').text(file);
});

$('.add').click(function () {
    var th = $(this).closest('.wrap').find('.count');
    th.val(+th.val() + 1);
});

$('.sub').click(function () {
    var th = $(this).closest('.wrap').find('.count');
    if (th.val() > 1) th.val(+th.val() - 1);
});

const $menu = $('.down_menu');

$(document).mouseup(e => {
    if (!$menu.is(e.target) && $menu.has(e.target).length === 0){
        $menu.removeClass('is_active');
    }
});

$('.down_toggle').on('click', () => {
    $menu.toggleClass('is_active');
});

$('.delete_cart').on("click", function (m) {
    m.preventDefault();
    $(this).parents('.body_info').addClass("remove_block");
});

// REMOVE IMAGE
$('.remove_noty').on("click", function () {
    $(this).parents('.blcok_group').addClass("remove_block");
    $(window).trigger('resize.px.parallax-window');
    jQuery(window).trigger('resize').trigger('scroll');
});

/// Scrool Nav

// $('#nav-icon3').addClass('open');
var $owl = $('.owl-carousel');
$('#nav-icon3').click(function(){
    $('#nav-icon3').toggleClass('open');
    $(".section_nav").toggleClass('go');
    if ($(window).width() > 767) {
        $('.body_section').toggleClass('space_section');
        $('.body_section').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
            owl.trigger('refresh.owl.carousel');
            owl2.trigger('refresh.owl.carousel');
            owl3.trigger('refresh.owl.carousel');
            $(window).trigger('resize.px.parallax-window');
            jQuery(window).trigger('resize').trigger('scroll');
        });
    }
});

$('.click_fav').click(function(){
    $(".act").toggleClass('active');
    $(this).find("i").toggleClass("far fa-heart fas fa-heart");
    $(this).find("i").toggleClass("color_red");
});

$('.toggle_links').slideUp('open');

$('.col_aps').click(function(event){
    event.preventDefault();
    $(".col_aps i").toggleClass('fa-plus fa-minus');
    $('.toggle_links').slideToggle();
});

//// add slider
var $owl = $('#owl_img');
var owl = $owl.owlCarousel({
    loop:true,
    responsiveBaseElement: '.body_section',
    margin:0,
    center:true,
    autoplay:false,
    pagination : true,
    autoplayTimeout: 2000,
    animateOut: 'fadeOut',
    smartSpeed: 2000,
    dragEndSpeed: 2000,
    nav:true,
    navText: [
        '<i class="fas fa-long-arrow-alt-right"></i>',
        '<i class="fas fa-long-arrow-alt-left"></i>'
              ],
    responsive:{
        0:{
            items:1
        },
        900:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

var $owl = $('.offer');
var owl2 = $owl.owlCarousel({
    loop:false,
    margin:10,
    center:false,
    autoplay:false,
    pagination : true,
    responsiveBaseElement: '.body_section',
    autoplayTimeout: 2000,
    animateOut: 'fadeOut',
    smartSpeed: 2000,
    dragEndSpeed: 2000,
    nav:true,
    navText: [
        '<i class="fas fa-long-arrow-alt-right"></i>',
        '<i class="fas fa-long-arrow-alt-left"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        900:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

var $owl = $('#owl_gallary');
var owl3 = $owl.owlCarousel({
    loop:true,
    margin:10,
    center:true,
    autoplay:false,
    responsiveBaseElement: '.body_section',
    pagination : false,
    nav:true,
    navText: [
        '<i class="fas fa-chevron-right"></i>',
        '<i class="fas fa-chevron-left"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        900:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
