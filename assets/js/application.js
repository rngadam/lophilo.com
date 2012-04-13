!function ($) {

  $(function(){
    // carousel demo
    $('#myCarousel').carousel();

    $('#Contribute').popover({placement: 'top'});
    $('#Pre-order').popover({placement: 'top'});
    $('#Invest').popover({placement: 'top'});
    products = $('.carousel-item');
    products.hover(function() {
        // hover in
        $(this).next().show();
    }, function() {
        // hover out
        $(this).next().hide();
    });

    products.next().hide();

 })
}(window.jQuery)