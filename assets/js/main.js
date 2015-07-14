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

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Toggle the 'Read more' and 'Read less' links.
$('.read-more').click(function() {
	if ($(this).attr("aria-expanded") == "false")
	{		
		$(this).find($(".fa")).removeClass('fa-toggle-down').addClass('fa-toggle-up');	// Switch the font-awesome up/down arrow
		$(this).find($('span')).text($(this).text().replace('more','less'));			// Change text from 'more' to 'less'
		$(this).find($('span')).text().trim();											// Trim trailing whitespace
	}
	else if($(this).attr("aria-expanded") == "true")
	{	
		$(this).find($(".fa")).removeClass('fa-toggle-up').addClass('fa-toggle-down');
		$(this).find($('span')).text($(this).text().replace('less','more'));		
		$(this).find($('span')).text().trim();
	}
});