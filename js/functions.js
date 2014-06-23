/**
 * Created by Sallar Kaboli <sallar.kaboli@gmail.com>
 * @sallar
 * 
 * Released under the MIT License.
 * http://sallar.mit-license.org/
 * 
 * This document demonstrates three things:
 * 
 * - Creating a simple parallax effect on the content
 * - Creating a Medium.com-style blur on scroll image
 * - Getting scroll position using requestAnimationFrame for better performance
 */


/**
 * Cache
 */

var $content = $('.featured-content')
  , $blur    = $('.featured-overlay')
  , wHeight  = $(window).height();

$(window).on('resize', function(){
  wHeight = $(window).height();
});

/**
 * requestAnimationFrame Shim 
 */
window.requestAnimFrame = (function()
{
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

/**
 * Scroller
 */
function Scroller()
{
  this.latestKnownScrollY = 0;
  this.ticking            = false;
}

Scroller.prototype = {
  /**
   * Initialize
   */
  init: function() {
    window.addEventListener('scroll', this.onScroll.bind(this), false);
  },

  /**
   * Capture Scroll
   */
  onScroll: function() {
    this.latestKnownScrollY = window.scrollY;
    this.requestTick();
  },

  /**
   * Request a Tick
   */
  requestTick: function() {
    if( !this.ticking ) { window.requestAnimFrame(this.update.bind(this));
    }
    this.ticking = true;
  },

  /**
   * Update.
   */
  update: function() {
    var currentScrollY = this.latestKnownScrollY;
    this.ticking       = false;
    
    /**
     * Do The Dirty Work Here
     */
    var slowScroll = currentScrollY / 4
      , blurScroll = currentScrollY * 2;
    
    $('.featured-content').css({
      'transform'         : 'translateY(-' + slowScroll + 'px)',
      '-moz-transform'    : 'translateY(-' + slowScroll + 'px)',
      '-webkit-transform' : 'translateY(-' + slowScroll + 'px)'
    });
    
    $('.featured-overlay').css({
      'opacity' : blurScroll / wHeight
    });
  }
};

/**
 * Attach!
 */
var scroller = new Scroller();  
scroller.init();

/**-----------------------------------------------------------------------------------
-----------------------------END OF PARALLAX-----------------------------------------**/
/**window.onload = function(){ 
  //Get submit button
  var submitbutton = document.getElementById("searchbar");
  //Add listener to submit button
  if(submitbutton.addEventListener){
    submitbutton.addEventListener("click", function() {
      if (submitbutton.value == "Search Products"){//Customize this text string to whatever you want
        submitbutton.value = '';
      }
    });
  }
}**/
/**-----------------------------------------------------------------------------------
-----------------------------END OF SearchBar-----------------------------------------
(function (w, doc,co) {
      // http://stackoverflow.com/questions/901115/get-query-string-values-in-javascript
      var u = {},
        e,
        a = /\+/g,  // Regex for replacing addition symbol with a space
        r = /([^&=]+)=?([^&]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
        q = w.location.search.substring(1),
        v = '2.0.3';

      while (e = r.exec(q)) {
        u[d(e[1])] = d(e[2]);
      }
      
      if (!!u.jquery) {
        v = u.jquery;
      } 

      doc.write('<script src="http://ajax.googleapis.com/ajax/libs/jquery/'+v+'/jquery.min.js">' + "<" + '/' + 'script>');
      co.log('\nLoading jQuery v' + v + '\n');
    })(window, document, console);
-----------------------------------------------------------------------------------**/
$(window).load(function(){
  $(function () {
    $('input#searchbar').quicksearch('div#byBrands ul');
  });  
  /*----------------*/
  $(function () {
    $('.tooltips').tooltip();
    $('.popovers').popover();
    $('body').scrollspy({ target: '.header' })
  });
});