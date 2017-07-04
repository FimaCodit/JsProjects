
     $('header').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 10);
    var amountMovedY = (e.pageY * -1 / 10);
    console.log('test fork');
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});

     


