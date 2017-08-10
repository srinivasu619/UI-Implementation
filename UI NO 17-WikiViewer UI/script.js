$(document).ready(function(){
  console.log("document ready");
  $("#searchbutton").click(function(e){
    console.log("button clicked");
    e.preventDefault();
    var searchterm = $("#searchval").val().trim();
    if(searchterm.length !=0)
      {
        $('#resultsContainer').empty();
        call(searchterm);
        $("#searchval").val('');
      }
  });
});
function call(searchterm)
{
  //console.log('Function ');
   var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchterm+'&format=json&callback=?';
  $.ajax({
    url:url,
    type: 'GET',
    contentType:"application/json; charset=utf-8",
    async:false,
    dataType:"json",
    success:function(data)
    {
      $('#searchquery').text('You Searched for " '+data[0]+' "');
      for(var i=0;i<data[1].length;i++)
        {
          var elem='<div class="result"><h3><a class="noDeco" href="'+data[3][i]+'" target="_blank">'+data[1][i]+'</a></h3><p>'+data[2][i]+'</p></div>';
          $('#resultsContainer').append(elem);
        }
    }
  })
}