//Traer elementos del HTML
var $btnBack = $(".btn-back");
var $btnSendForm = $("#btn-submit-phone");
var $btnCloseModalCode = $("#btn-close-modal-code");
var $btnSubmitCode = $("#btn-submit-code");
var $btnPersonalInfo = $("#btn-close-personal-info")


function loadPage() {

//----Funciones que evitan que al darle enter se envie el formulario
  $('form').keypress(function(e){
   if(e == 13){
     return false;
   }
 });

 $('input').keypress(function(e){
   if(e.which == 13){
     return false;
   }
 });
//-----

  $("#second-view").hide();

  setTimeout(function () { $("#first-view").fadeOut(1500); }, 1500);
  setTimeout(function () { $("#second-view").show(); }, 1000);

  $("#number-input").keyup(validationPhone);
  $btnSendForm.click(randomCodeAlert);
  $("#btn-resend").click(randomCodeAlertB);
  $btnCloseModalCode.click(verificationCodeView);
  $("#code-input").keyup(verificationCode);
  $btnSubmitCode.click(personalFormView);
  $btnPersonalInfo.click(successfulRegistration);
  $("#inputGroupSelect").change(showAreaCodePhone);
  $("#checkTerms").click(personalFormValidate)


}


function validationPhone() { //función para validar el número telefónico
    if($(this).val().trim().length === 10 ) {
      event.preventDefault();
      $btnSendForm.removeAttr("disabled");
    } else {
      $btnSendForm.attr("disabled" , true);
    }
}

function showAreaCodePhone() {//función para mostrar el código de área del páis seleccionado
  var selectedIndex = event.target.selectedIndex;
  var selectedOption = event.target[selectedIndex];
  var phoneCode = selectedOption.dataset.country;
  $(".code-number").text("+" + phoneCode);
}


function randomCodeAlert() { //Funcion para generar el código random de 3 digitos
  var $containerCodeRandom = $("#container-code-random")
  var $codeRandom = Math.floor((Math.random() * 900) + 100);
  $containerCodeRandom.text("LAB-" + $codeRandom);
  verificationCode($codeRandom);
}

function randomCodeAlertB() { //Funcion para generar el código random de 3 digitos
  var $containerCodeRandom = $("#container-code-random")
  var $codeRandom = Math.floor((Math.random() * 900) + 100);
  alert("LAB-" + $codeRandom);
}



function verificationCodeView() { //Funcion que muestra la vista de verificación de código y le pone la clase hide a todos los demás containers
  var $containerVerifyCodeRandom = $("#verify-code-random");
  $containerVerifyCodeRandom.removeClass("d-none");
  $containerVerifyCodeRandom.siblings().addClass("d-none");
}

function verificationCode(codeRandom) {

  if($(this).val().trim().length === 3) {
    $("#btn-submit-code").removeAttr("disabled");
  } else {
    $btnSubmitCode.attr("disabled" , true);
  }
}
/*
console.log(codeRandom);

var $codeInput = $("#code-input");

var $codeInputValue = $("#code-input").val();
console.log($codeInputValue);

  if( $codeInputValue == codeRandom) {
      console.log("hola");
    $("#btn-submit-code").removeAttr("disabled");
  } else {
    $btnSubmitCode.attr("disabled" , true);
  }
}
*/
function personalFormView() {
  var $containerPersonalForm = $("#personal-info");
  $containerPersonalForm.removeClass("d-none");
  $containerPersonalForm.siblings().addClass("d-none");
}


function personalFormValidate() {

  if( $("#personal-form-name").val().length > 0 && $("#personal-form-last-name").val().length > 0 && $("#personal-form-email") !== null && $("#checkTerms").is(':checked') ){
       $("#btn-close-personal-info").removeAttr("disabled");
  } else {
       $("#btn-close-personal-info").attr("disabled" , true);
  }
}

function successfulRegistration() {
  var $successfulRegistrationView = $("#successful-registration");
  $successfulRegistrationView.removeClass("d-none");
  $successfulRegistrationView.siblings().addClass("d-none");
}


$(document).ready(loadPage);
