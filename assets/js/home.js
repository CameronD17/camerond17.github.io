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
        
        var blyth = document.getElementById("abt-blyth-img");
        var blythImg=document.createElement("img");
        blythImg.src="assets/img/abt_blyth.jpg"
        blythImg.className="img-circle";
        blyth.appendChild(blythImg);
        
        var code = document.getElementById("abt-code-img");
        var codeImg=document.createElement("img");
        codeImg.src="assets/img/abt_code.jpg"
        codeImg.className="img-circle";
        code.appendChild(codeImg);
        
        var canicross = document.getElementById("abt-canicross-img");
        var canicrossImg=document.createElement("img");
        canicrossImg.src="assets/img/abt_canicross.jpg"
        canicrossImg.className="img-circle";
        canicross.appendChild(canicrossImg);
        
        var travel = document.getElementById("abt-travel-img");
        var travelImg=document.createElement("img");
        travelImg.src="assets/img/abt_travel.jpg"
        travelImg.className="img-circle";
        travel.appendChild(travelImg);
        
        var avaloq = document.getElementById("exp-avaloq-img");
        var avaloqImg=document.createElement("img");
        avaloqImg.src="assets/img/exp_avaloq.png"
        avaloqImg.className="img-circle";
        avaloq.appendChild(avaloqImg);
        
        var fanduel = document.getElementById("exp-fanduel-img");
        var fanduelImg=document.createElement("img");
        fanduelImg.src="assets/img/exp_fanduel.jpg"
        fanduelImg.className="img-circle";
        fanduel.appendChild(fanduelImg);
        
        var cgi = document.getElementById("exp-cgi-img");
        var cgiImg=document.createElement("img");
        cgiImg.src="assets/img/exp_cgi.jpg"
        cgiImg.className="img-circle";
        cgi.appendChild(cgiImg);
        
        var graduation = document.getElementById("exp-ncl-img");
        var graduationImg=document.createElement("img");
        graduationImg.src="assets/img/exp_ncl.jpg"
        graduationImg.className="img-circle";
        graduation.appendChild(graduationImg);
    }
} window.onload = loadImages();

$( window ).resize(function() {
    loadImages();
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