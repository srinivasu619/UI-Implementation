$(function(){
    var currDisplay='none';
    var containerWidth='200px';
    var containerHeight='250px';
    var imageMargin='0';
    $('#bookImage').click(function(e){
      e.preventDefault();
      console.log('image Clicked');
      $('#bookConatiner').css('height',containerHeight);
      $('#bookConatiner').css('width',containerWidth);
      $('#bookDetails').css("display", currDisplay);
      $('#bookImage').css('margin',imageMargin);
      if(currDisplay == 'block')
        {
          currDisplay='none';
          containerWidth='200px';
          containerHeight='250px';
          imageMargin='0';
          $('#bookImage').css('margin-top','50px');
        }
      else
        {
          currDisplay='block';
          containerWidth='300px';
          containerHeight='500px';
          imageMargin='0 auto';
        }
      
    })
  });