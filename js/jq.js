// кнопка вызова модального окна

$(document).ready(function($) {
  $('.popup-open').click(function() {
    $('.popup-fade').fadeIn();
    return false;
  }); 
  
  $('.popup-close').click(function() {
    $(this).parents('.popup-fade').fadeOut();
    return false;
  });   
 
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup-fade').fadeOut();
    }
  });
  
  $('.popup-fade').click(function(e) {
    if ($(e.target).closest('.popup').length == 0) {
      $(this).fadeOut();          
    }
  });
});




// форма в модальном окне

$(function(){
  $(".error-pass, .error-email").hide();
  $(".overlay").hide();
  $(".confirmation").hide();
})

function checkEmail(email) {
  var emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailReg.test(email);
}

function validateForm() {
  var countErrors = 0;
  var emailInput = $("input[type=email]");
  var passInput = $("input[type=phone]");
  
  let inp = document.querySelector('#tel');// Проверяем фокусinp.addEventListener('focus', _ => {  // Если там ничего нет или есть, но левое  if(!/^\+\d*$/.test(inp.value))    // То вставляем знак плюса как значение    inp.value = '+';});inp.addEventListener('keypress', e => {  // Отменяем ввод не цифр  if(!/\d/.test(e.key))    e.preventDefault();});



  if(!checkEmail($(emailInput).val())) {
    $(".error-email").fadeIn();
    $(".email-msg").html("Por favor, compruebe su email");
    $(emailInput).addClass("warning");
    countErrors++;
  } else {
    $(emailInput).removeClass("warning");
  }

  if(passInput.val().length < 5) {
    $(".error-pass").fadeIn();
    $(".pass-msg").html("La contraseña debe al menos 5 caracteres");
    $(passInput).addClass("warning");
    countErrors++;
  } else {
    $(passInput).removeClass("warning");
  }

  setTimeout(function showErrorMsg() {
    $(".error-email, .error-pass").fadeOut();
  }, 2000)

  if(countErrors === 0) {
    $(".overlay").show();
    $(".confirmation").show();
  }
}

let inp = document.querySelector('#tel');

// Проверяем фокус
inp.addEventListener('focus', _ => {
  // Если там ничего нет или есть, но левое
  if(!/^\+\d*$/.test(inp.value))
    // То вставляем знак плюса как значение
    inp.value = '+';
});

inp.addEventListener('keypress', e => {
  // Отменяем ввод не цифр
  if(!/\d/.test(e.key))
    e.preventDefault();
});


// рулетка галерея

