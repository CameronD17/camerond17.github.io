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


// Lock category pane to window (C) Cameron Doyle
var list = $("#category-list");
var listTop = $('#category-list').offset().top - 100;
  
$(window).scroll(function() {    
    if (($(window).height() - 100) > $('#category-list').height())
    {
        var windowTop = $(window).scrollTop();    
        var archiveTop = $('#blog-archive').offset().top + 100;
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


// Toggle blog categories on/off (C) Cameron Doyle
$('.archive-category').click(function() {
    
    if($(this).hasClass('selected')) {
        $(this).removeClass('selected');
        $(this).find($(".fa")).removeClass('fa-check-square').addClass('fa-square');
    }
    else {
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
        list.removeClass("category-list-fix");
    }
});

$('.archive-toggle').click(function() {

    if($(this).hasClass('selectall'))
    {
        $('.archive-category').each(function() {
            if (!$(this).hasClass('selected'))
            {
                $(this).addClass('selected');
                $(this).find($(".fa")).removeClass('fa-square').addClass('fa-check-square');
            }
        });
        
        $('.archive-excerpt').each(function() {
            if ($(this).hasClass('hidden'))
            {
                $(this).removeClass('hidden');
            }
        });
    }
    else
    {
        list.removeClass("category-list-fix");
        $('.archive-category').each(function() {
            if ($(this).hasClass('selected'))
            {
                $(this).removeClass('selected');
                $(this).find($(".fa")).removeClass('fa-check-square').addClass('fa-square');
            }
        });
        
        $('.archive-excerpt').each(function() {
            if (!$(this).hasClass('hidden'))
            {
                $(this).addClass('hidden');
            }
        });
    }
});