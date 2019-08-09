var data = {};
data.allUsers = [];
$('#sequence').click(sequence);
$('#parallel').click(parallel);
function parallel() {
  data.allUsers = [];
  for (var i = 1; i <= 10; i++) {
    fetch('https://jsonplaceholder.typicode.com/todos/' + i)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        data.allUsers.push(myJson);
        render();
      }).catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  }
}
function sequence() {
  data.allUsers = [];
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      data.allUsers.push(myJson);
    })
    .then(function () {
      return fetch('https://jsonplaceholder.typicode.com/todos/2');
    }).then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      data.allUsers.push(myJson);
    }).then(function(){
      timeoutPromise();
    })
    .then(function () {
      return fetch('https://jsonplaceholder.typicode.com/todos/3');
    }).then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      data.allUsers.push(myJson);
      render();
    }).catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}

function timeoutPromise() {
  function delayPromise() {
    return fetch('https://jsonplaceholder.typicode.com/todos/3')
  }

  setTimeout(function(){
    delayPromise()
  },5000);
}


function render() {
  var myTemplate = $('#forRendering-template');
  var html = myTemplate.render(data);
  $('#showTable').html(html);
}



