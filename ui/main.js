var nameInput = document.getElementById('name');   
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () { 
  
  //Create a request object
  var request = new XMLHttpRequest();
  
  //Capture the response ans store it in a variable 
  request.onreadystatechange = function () {
     if (request.readyState === XMLHttpRequest.DONE) {
         //Take Some Action
         if (request.status === 200) {
              
    //Capture a list of names and it as a list.
    var names = request.responseText;
    names = JSON.parse(names);
    var list = '';
    for (var i=0; i< names.length; i++) {
        list += '<li>' + names[i] + '<li/>';
    }
      var ul = document.getElementById('namelist');
      ul.innerHTML = list;
         }
     }
        //Not done yet
  };
  
  //Make Request
  request.open('GET', 'http://jms2273916.imad.hasura-app.io/submit-name?name=' + name, true);
  request.send(null);
  };
  
  // Submit name
  var nameInput = document.getElementById('name');
  var name = nameInput.value;
  var submit= document.getElementById('submit_btn');
  submit.onclick = function () {
    //Make a request to the server and send the name
   
  };