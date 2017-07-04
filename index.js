
     $('header').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 10);
    var amountMovedY = (e.pageY * -1 / 10);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});

     


