$(document).ready(function () {
    //$('.overlay').hide().append()
   $.ajax({
       type :'GET',
       url : 'http://jsonplaceholder.typicode.com/photos',
       success:function (data,success,XMLHttpRequest) {
           console.log(data);
           let page = $('.contain');
           //$("<div>"+data.propiete+"</div>")
           for (let i = 0;i<data.length;i++){
               $("<p>Numero de l'album n°"+data[i].id+"</p>").appendTo(page);
               $("<img src='"+data[i].thumbnailUrl+"'>").appendTo(page);
               $("<p>Titre de l'album : "+data[i].title+"</a>").appendTo(page);
               $("<img src='"+data[i].url+"'>").appendTo(page);
           }
               $('.overlay').hide();
       },
       error:function () {
           alert("error");
       },
       beforeSend:function () {
           $('.overlay').show();
       }
   })
});