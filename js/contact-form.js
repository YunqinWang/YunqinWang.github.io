
$("[id*='id']").on("focus",function(){
  $(this).addClass("focusing");
});
$("[id*='id']").on("blur",function(){
  $(this).removeClass("focusing");
});

//when form is submitted
$("#contact-form").on("submit", function(){
  var formValid = true;

  //check Name
  if($("#request-name-id").val().length>1) {
    $("#name-hidden").addClass("hidden");
  }else{
    $("#name-hidden").removeClass("hidden");
    formValid = false;
  }

  //check email
  if($("#request-email-id").prop("validity").valid){
    $("#email-hidden").addClass("hidden");
  }else{
    $("#email-hidden").removeClass("hidden");
    formValid = false;
  }

  //check idendity
  if(
    $("#request-identity-employer-id").is(":checked")||
    $("#request-identity-designer-id").is(":checked")||
    $("#request-identity-other-id").is(":checked")
    ){
      $("#id-hidden").addClass("hidden");
  }else{
    $("#id-hidden").removeClass("hidden");
    formValid = false;
  }

  //check message
  if($("#request-message-id").val().length>14) {
    $("#message-hidden").addClass("hidden");
  }else{
    $("#message-hidden").removeClass("hidden");
    formValid = false;
  }
  return formValid;
});
