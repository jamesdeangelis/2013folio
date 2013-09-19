$(document).ready(function() {
  $("#open-menu").click(function() {
    $("body").toggleClass("menu-open");
  });
  $(".about-open").click(function() {
      $("body").toggleClass("page-work page-about");
  });
  $("img.lazy").lazyload({ 
    effect : "fadeIn"
  });

  // Update the social icons every 5 seconds
  setInterval(function(){

    var classes = ['navbar-brand-twitter','navbar-brand-dribbble','navbar-brand-linkedin'];
    var links = ["http://dribbble.com/jamesdeangelis","http://au.linkedin.com/in/jamesdeangelis/", "http://twitter.com/jamesdeangelis"];

    $("#social-switch").each(function(){
        this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
        this.href = links [($.inArray(this.href, links)+1)%links.length];
      });
  },5000);
  
});

// Make menu divs clickable
$(document).delegate(".work-menu-item", "click", function() {
  window.location = $(this).find("a").attr("href");
});

// Prevent iOS overscroll bullshit
$('body').delegate('#page-wrapper','touchmove',function(e){
  e.preventDefault();
}).delegate('.work','touchmove',function(){
  e.stopPropagation();
});

// Dribbble feed
$(document).ready(function () {   
  $.jribbble.getShotsByPlayerId('jamesdeangelis', function (playerShots) {
      var html = [];
  
      $.each(playerShots.shots, function (i, shot) {
          html.push('<a href="' + shot.url + '">');
          html.push('<img src="' + shot.image_url + '" ');
          html.push('alt="' + shot.title + '"></a></li>');
      });
  
      $('#dribbble-hold').html(html.join(''));
  }, {page: 1, per_page: 1});
});