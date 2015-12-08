/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * Modified by Cameron Doyle 2015
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
 
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Avoid loading images on mobile (C) Cameron Doyle
var loaded = false;

function loadImages() {
    if($(window).width() > 768 && !loaded)
    {
        loaded = true;
        
        var profile = document.getElementById("profile-img");
        var profileImg=document.createElement("img");
        profileImg.src="assets/img/profile.jpg"
        profileImg.className="img-circle about-img";
        profile.appendChild(profileImg);
        
        var blyth = document.getElementById("blyth-img");
        var blythImg=document.createElement("img");
        blythImg.src="assets/img/blyth.jpg"
        blythImg.className="img-circle";
        blyth.appendChild(blythImg);
        
        var code = document.getElementById("code-img");        
        var codeImg=document.createElement("img");
        codeImg.src="assets/img/code.jpg"
        codeImg.className="img-circle";
        code.appendChild(codeImg);
        
        var travel = document.getElementById("travel-img");
        var travelImg=document.createElement("img");
        travelImg.src="assets/img/travel.jpg"
        travelImg.className="img-circle";
        travel.appendChild(travelImg);
        
        var cgi = document.getElementById("cgi-img");
        var cgiImg=document.createElement("img");
        cgiImg.src="assets/img/cgi_logo.png"
        cgiImg.className="img-circle";
        cgi.appendChild(cgiImg);
        
        var graduation = document.getElementById("graduation-img");
        var graduationImg=document.createElement("img");
        graduationImg.src="assets/img/graduation.jpg"
        graduationImg.className="img-circle";
        graduation.appendChild(graduationImg);
    }
} window.onload = loadImages();

$( window ).resize(function() {
    loadImages();
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Closes the Responsive Menu on click-off (C) Cameron Doyle
$('body').click(function() {
    if ($('.navbar-collapse').hasClass('collapse in')) {
        $('.navbar-collapse').collapse('hide');
    }
});

// Toggle the 'Read more' and 'Read less' links (C) Cameron Doyle
$('.read-more').click(function() {
    if ($(this).attr("aria-expanded") == "false")
    {
        $(this).find($(".fa")).removeClass('fa-toggle-down').addClass('fa-toggle-up');    // Switch the font-awesome up/down arrow
        $(this).find($('span')).text($(this).text().replace('more','less'));              // Change text from 'more' to 'less'
        $(this).find($('span')).text().trim();                                            // Trim trailing whitespace
    }
    else if($(this).attr("aria-expanded") == "true")
    {
        $(this).find($(".fa")).removeClass('fa-toggle-up').addClass('fa-toggle-down');
        $(this).find($('span')).text($(this).text().replace('less','more'));        
        $(this).find($('span')).text().trim();
    }
});

// Toggle skills on/off (C) Cameron Doyle
$('.skill-toggle').click(function() {
    
    var level = $(this).attr('id');    
    
    if($(this).hasClass('selected'))
    {
        $(this).removeClass('selected');
        $(this).find($(".fa")).removeClass('fa-check-square-o').addClass('fa-square-o');
        $('.'+level).each(function() {                
            $(this).addClass('hidden');
        });
    }
    else
    {
        $(this).addClass('selected');            
        $(this).find($(".fa")).removeClass('fa-square-o').addClass('fa-check-square-o');
        $('.'+level).each(function() {
            $(this).removeClass('hidden');
        });
    }
});