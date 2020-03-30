/* Template Name: Invoza - Bootstrap 4 Landing Page Tamplate
   Author: Themesdesign
   File Description: Main JS file of the template
*/


! function($) {
    "use strict";

    var Invoza = function() {};

    Invoza.prototype.initStickyMenu = function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
        
            if (scroll >= 50) {
                $(".sticky").addClass("nav-sticky");
            } else {
                $(".sticky").removeClass("nav-sticky");
            }
        });
    },

    Invoza.prototype.initSmoothLink = function() {
        $('.navbar-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    Invoza.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({
            offset:20
        });
    },

    Invoza.prototype.initTesticarousel = function() {
        $('#testi-carousel').owlCarousel({
            items: 1,
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                576:{
                    items:2
                },
     
            }
        });
    },

    Invoza.prototype.initCounter = function() {
        // Counter Number
        var a = 0;
        $(window).scroll(function() {
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                            countNum: countTo
                        },

                        {

                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });
                });
                a = 1;
            }
        });

    },


    feather.replace()

    Invoza.prototype.init = function() {
        this.initStickyMenu();
        this.initSmoothLink();
        this.initScrollspy();
        this.initTesticarousel();
        this.initCounter();
    },
    //init
    $.Invoza = new Invoza, $.Invoza.Constructor = Invoza
}(window.jQuery),


//initializing
function($) {
    "use strict";
    $.Invoza.init();
}(window.jQuery);




var price = document.getElementById("price");
var data = document.getElementById("data");
var profit = document.getElementById("profit");
var rate = document.getElementById("rate");
var percentageProfit = 0;
var priceVal = 0;
var dataVal = 0;
var unitPriceVal = 0;
var rateVal= 0;
var unitProfit= 0;
var profitVal= 0;

function getProfit(){
    price.addEventListener("keyup", function(){
        priceVal = parseInt(price.value);
        calculateValues()
    });
    data.addEventListener("keyup", function(){
        dataVal = parseInt(data.value);
        calculateValues()
    });
    rate.addEventListener("keyup", function(){
        rateVal = parseInt(rate.value);
        calculateValues()
    });
}

function calculateValues(){
    unitPriceVal = dataVal == 0 ? 0 : (priceVal / dataVal);

    document.getElementById("unitPrice").innerText = unitPriceVal;
    
    unitProfit = (rateVal - unitPriceVal);
    document.getElementById("unitProfit").innerText = unitProfit;

    profitVal = (dataVal*rateVal) - priceVal;
    document.getElementById("profit").innerText = profitVal;

    percentageProfit = (profitVal/priceVal)*100;
    document.getElementById("percentageProfit").innerText = percentageProfit; 
}

getProfit();

