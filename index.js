var data = {};
data.allUsers = [];
for (var i = 1; i <= 10; i++) {
  fetch('https://jsonplaceholder.typicode.com/todos/'+i)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      data.allUsers.push(myJson);
      console.log(data.allUsers)
    });
}

setTimeout(function(){
  var myTemplate = $('#forRendering-template');
var html = myTemplate.render(data);
$('#showTable').html(html);
},5000)




