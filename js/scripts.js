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
    $("#social-switch").each(function(){
        this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
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