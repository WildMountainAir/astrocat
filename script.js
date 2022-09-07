const alisTagFunction = () => {
  console.log('Ali\'s tag function fired!');
}

$(document).ready(function() {
  
  // Product Page
  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });
  // Shopping Cart
  $('.method').on('click', function() {
    $('.method').removeClass('blue-border');
    $(this).addClass('blue-border');
  });
 
  var $cardInput = $('.input-fields input');
   
  $('.next-btn').on('click', function(e) {
   
    $cardInput.removeClass('warning');
   
    $cardInput.each(function() {    
       var $this = $(this);
       if (!$this.val()) {
         $this.addClass('warning');
       }
    })
  });
})
