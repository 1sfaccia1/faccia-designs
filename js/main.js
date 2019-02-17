(function($){
  $(function(){

    TweenMax.from('.mainHeader', 1, { y:-50, autoAlpha: 0, ease: Power1.easeOut });

      // var header = $("#header"),
      //     logo-container = $("#logo-container"),
      //
      //     main-logo = $("#main-logo"),
      //
      //
      //     tl = new timeLineLite({paused:true});
      //
      // tl
      //
      //   .from(main-logo, 0.3, {opacity: 0;});




      $('.sidenav').sidenav();
      $('.parallax').parallax();
      $('.fixed-action-btn').floatingActionButton();

  }); // end of document ready
  $('.scrollspy').scrollSpy();
})(jQuery);
