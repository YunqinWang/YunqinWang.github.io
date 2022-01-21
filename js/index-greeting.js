console.log("did this load?")
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = "Good Evening!"
}else if (hourNow > 12) {
  greeting = "Good Afternoon!"
}else if (hourNow > 5) {
  greeting = "Good Morning!"
  }else{
  greeting = "Welcome!"
}

// get the position of id timeGrreeting
var greetingPos =  document.getElementById('timeGreeting');
// set the content to greeting
greetingPos.innerHTML = greeting;


// jquery sub navigation
// $(document).ready(function(){
//   $("#banner-navigation-submain").on('click',function(){
//     $("#banner-navigation-worksub").removeClass("hidden");
//   });
//   $("#banner-navigation-worksub").on('mouseout',function(){
//     $("#banner-navigation-worksub").addClass("hidden");
//   });
//});
