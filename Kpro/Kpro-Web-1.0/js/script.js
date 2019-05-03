/* -------------------------------------------------- */
/* Mobile Nav*/
/* -------------------------------------------------- */
$(document).ready(function(){
    $( ".js-nav" ).click(function() { 
        var nav=$('.hedaer_main-nav-content--nav');
        var toggnav=$('.toggle');
        var jsnav=$('.toggle.js-nav');
        nav.slideToggle( "slow" );
       if(jsnav.hasClass('active')){
        toggnav.removeClass('active');
       } else{
        toggnav.addClass('active');
       }
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* -------------------------------------------------- */
/* Sticky navigation code*/
/* -------------------------------------------------- */

$(document).ready(function(){

  $('.js--welcome').waypoint(function(dirction){
    
      if (dirction=="down"){
          $('.hedaer_main-nav').addClass('sticky-navbar');
         // $('.sticky-logo').removeClass('hedaer_main-nav-content--logo-img');
          $('.sticky-logo').addClass('small--logo-img');
          $('.small--logo-img').removeClass('hedaer_main-nav-content--logo-img');
      }
      else{
          $('.hedaer_main-nav').removeClass('sticky-navbar'); 
          $('.sticky-logo').addClass('hedaer_main-nav-content--logo-img');
          $('.hedaer_main-nav-content--logo-img').removeClass('small--logo-img');
      }
  },{
offset: '30px'
});
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* -------------------------------------------------- */
/* Start Smooth Scroll*/
/* -------------------------------------------------- */ 
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  // End smooth scroll
  
  
	// Show/Hide bottom icon to scroll up 	
	$(window).scroll(function() {
			
    if ($(this).scrollTop()<500)
     {
        $('.scrollTopFixed').fadeOut();
     }
    else
     {
        $('.scrollTopFixed').fadeIn();
     }
 });
 // Show/Hide bottom icon to scroll up

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* -------------------------------------------------- */
/* Start code for active top nav bar on scroll*/
/* -------------------------------------------------- */ 
	 
	$(document).ready(function(){
   		$("section").mouseenter(function(){
  	   	var nav = $('.hedaer_main-nav-content--nav');
     	 	var id = $(this).attr('id');
        console.log(id)
        $('.hedaer_main-nav-content--nav a').removeClass('active');
        if(id){
          nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
        else{
          nav.find('a[href="#welcome"]').addClass('active');
        }        
      });
      $('.hedaer_main-nav-content--nav a').click(function(){
          
          $('.hedaer_main-nav-content--nav a').removeClass('active');
          $(this).addClass('active');
      });
		// End top nav bar on scroll
    }); 
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* -------------------------------------------------- */
/* Hot Fix for smooth scroll for IE browser*/
/* -------------------------------------------------- */ 
  $(document).ready(function(){
    if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
       $('body').on("mousewheel", function () {
           // remove default behavior
           event.preventDefault(); 

           //scroll without smoothing
           var wheelDelta = event.wheelDelta;
           var currentScrollPosition = window.pageYOffset;
           window.scrollTo(0, currentScrollPosition - wheelDelta);
       });
}
});

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////