$(document).ready(function () {
  //when form is submitted
  $("#work-form").on("submit", function() {
    var formValid = true;

    //check comment
    if($("#request-comment-id").val().length>14) {
      console.log("js")
      $("#comment-id").addClass("hidden");
    }else{
      $("#comment-id").removeClass("hidden");
      formValid = false;
    }
    return formValid;
  })
})
