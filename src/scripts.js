document.addEventListener("DOMContentLoaded", () => {
console.log("content loaded");

//chexk off todos by clicking
$('ul').on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click on x to delete todo
$('ul').on("click", "span", function(event){
  event.stopPropagation();
  $(this).parent().fadeOut(500, function(){
      $(this).remove();
  });
});

//add a new todo
$("input[type='text']").keypress(function(event){
  //checking for an enter press
  if (event.which === 13){
    let todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span>X </span>" + todoText + "</li>");
  }
});


});
