// Toggle the 'Read more' and 'Read less' links (C) Cameron Doyle
$('.read-more').click(function() {
    if ($(this).attr("aria-expanded") == "false") {
        $(this).find($(".fa")).removeClass('fa-toggle-down').addClass('fa-toggle-up');    // Switch the font-awesome up/down arrow
        $(this).find($('span')).text($(this).text().replace('more','less'));              // Change text from 'more' to 'less'
        $(this).find($('span')).text().trim();                                            // Trim trailing whitespace
    }
    else if($(this).attr("aria-expanded") == "true") {
        $(this).find($(".fa")).removeClass('fa-toggle-up').addClass('fa-toggle-down');
        $(this).find($('span')).text($(this).text().replace('less','more'));        
        $(this).find($('span')).text().trim();
    }
});


// Lock category pane to window (C) Cameron Doyle  
$(window).scroll(function() {
    if ((($(window).height()) > $('#category-list').height()) && (($('#category-list').height() + 130) < $('#blog-archive').height())) {
        var archiveTop          = $('#blog-archive').offset().top;
        var archiveBottom       = archiveTop + $('#blog-archive').height();
        var categoryListBottom  = $(window).scrollTop() + $('#category-list').height(); 

        if (($(window).scrollTop() >= archiveTop) && (categoryListBottom <= archiveBottom)) {   // Enter Archive
            $("#category-list").removeClass("category-list-bottom");
            $("#category-list").addClass("category-list-fixed");
        } else if (categoryListBottom > archiveBottom){                                         // Exit Below Archive
            $("#category-list").removeClass("category-list-fixed");
            $("#category-list").addClass("category-list-bottom");
        } else {                                                                                // Exit Above Archive
            $("#category-list").removeClass("category-list-bottom");
            $("#category-list").removeClass("category-list-fixed");
        }
    }
});


// Toggle blog categories on/off (C) Cameron Doyle
$('.archive-category').click(function() {    
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
        $(this).find($(".fa")).removeClass('fa-check-square').addClass('fa-square');
    } else {
        $(this).addClass('selected');            
        $(this).find($(".fa")).removeClass('fa-square').addClass('fa-check-square');
    }    
    
    $('.archive-excerpt').each(function() {
        if (!$(this).hasClass('hidden')) {
            $(this).addClass('hidden');
        }
    });
    
    var none = true;
    $('.archive-category').each(function() {
        var category = $(this).attr('id');
        if ($(this).hasClass('selected')) {
            $('.archive-excerpt').each(function() {            
                if ($(this).find('tr>td>span>a').hasClass(category)) {
                    if ($(this).hasClass('hidden')) {
                        $(this).removeClass('hidden');
                        none = false;
                    }
                }
            });
        }
    });
    
    if (none) {
        $("#category-list").removeClass("category-list-bottom");
        $("#category-list").removeClass("category-list-fixed");
        if($("#no-blog-posts").hasClass("hidden")) {
            $("#no-blog-posts").removeClass("hidden");
        }
    } else if(!$("#no-blog-posts").hasClass("hidden")) {
        $("#no-blog-posts").addClass("hidden");  
    }
});

$('.archive-toggle').click(function() {
    if ($(this).hasClass('selectall')) {
        $('.archive-category').each(function() {
            if (!$(this).hasClass('selected')) {
                $(this).addClass('selected');
                $(this).find($(".fa")).removeClass('fa-square').addClass('fa-check-square');
            }
        });
        
        $('.archive-excerpt').each(function() {
            if ($(this).hasClass('hidden')) {
                $(this).removeClass('hidden');
            }
        });
        
        if(!$("#no-blog-posts").hasClass("hidden")) {
            $("#no-blog-posts").addClass("hidden");  
        }
    } else {
        $("#category-list").removeClass("category-list-bottom");
        $("#category-list").removeClass("category-list-fixed");
        $('.archive-category').each(function() {
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
                $(this).find($(".fa")).removeClass('fa-check-square').addClass('fa-square');
            }
        });
        
        $('.archive-excerpt').each(function() {
            if (!$(this).hasClass('hidden')) {
                $(this).addClass('hidden');
            }
        });
        
        if($("#no-blog-posts").hasClass("hidden")) {
            $("#no-blog-posts").removeClass("hidden");
        }
    }
});