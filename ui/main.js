//Counter Code
var button = document.getElementById('counter');

button.onclick = function () { 
  
  //Create a request object
  var request = new XMLHttpRequest();
  
  //Capture the response ans store it in a variable 
  request.onreadystatechange = function () {
     if (request.readyState === XMLHttpRequest.DONE) {
         //Take Some Action
         if (request.status === 200) {
             var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
         }
     }
        //Not done yet
  };
  
  //Make Request
  request.open('GET', 'http://jms2273916.imad.hasura-app.io/counter', true);
  request.send(null);
  };