document.addEventListener("DOMContentLoaded", () => {
console.log("content loaded");

//chexk off todos by clicking
$('li').click(function(){
  $(this).toggleClass("completed");
});

//click on x to delete todo
$('span').click(function(event){
  event.stopPropagation();
  $(this).parent().fadeOut(500, function(){
      $(this).remove();
  });
});

//add a new todo
$('input').on("")


});
