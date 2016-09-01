//define functions here
function getIt(){
  $("p").click(function(){
    alert("Hey!");
  });
}

function frameIt(){
  $("img").load(function(){
    $(this).addClass("tasty");
  });
}

function submitIt(){
  $("form").submit(function(){
    alert("Your form is going to be submitted now.");
  });
}

function pressIt(){
  $("input").keydown(function(key){
    if (key.which==71){
      alert("You pressed 'G'!");
    }
  });
}

$("#typing").ready(function(){

// call functions here
getIt();
frameIt();
pressIt();


});
