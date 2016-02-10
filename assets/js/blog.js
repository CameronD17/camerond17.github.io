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

//sidebar scroll boundaries
var list = $("#category-list");
var listTop = $('#category-list').offset().top - 100;

  
$(window).scroll(function() {    
    if (($(window).height() - 100) > $('#category-list').height())
    {
        var windowTop = $(window).scrollTop();    
        var archiveTop = $('#blog-archive').offset().top + 50;
        var archiveBottom = $('#blog-archive').offset().top + $('#blog-archive').height();
        var listBottom = listTop + $('#category-list').height(); 

        if (windowTop >= archiveTop)                    // Within Archive
        {
            list.removeClass("category-fix-release");
            list.addClass("category-list-fix");
        }
        else if (listBottom >= archiveBottom)           // Below Archive
        {
            list.removeClass("category-list-fix");
            list.addClass("category-fix-release");
        }
        else                                            // Above Archive
        { 
            list.removeClass("category-fix-release");
            list.removeClass("category-list-fix");
        }
    }
});