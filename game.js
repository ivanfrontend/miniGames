
 var schet = 0;
 var sunInt = $('#sunInt');
 var buttons = document.querySelectorAll('.indexBtn');
 var max = 5;
 var min = 1;
 var rand;
 var namb = 'NaN';
 var inputshow;

 sunInt = sunInt.text(schet);

  $('.popolnit').on('click', function(){
      
        $('.qwe').addClass('wi');
        $('.qwe').removeClass('show');
        $('.popolnit').addClass('show');
        $('.popolnit').removeClass('wi');
    })

    $('.popolnit2').on('click', function(){

       inputshow = $('.inputshow').val();

        schet = inputshow;

        if(inputshow > 10000){

            $('.mass').text('Вы неможите столько вести');

        }else{

            sunInt = sunInt.text(schet);

        


       $('.inputshow').val('');
      
        $('.qwe').removeClass('wi');
        $('.qwe').addClass('show');
        $('.popolnit').removeClass('show');
        $('.popolnit').addClass('wi');
    }
    })

for (let i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.innerText = i + 1;
        button.onclick = function () {
            namb = i;
        }
    }








    $('.stavka').on('click', function(){

        schet = parseInt(schet);

        var inputText = $('#textSum').val();

        rand = Math.floor(Math.random() * (max - min + 1)) + min;

        namb = namb+1;
        if(namb === 'NaN1'){
            $('.rand').text('вы не выбрали число');
        }else{
             if(inputText > schet){
           $('.rand').text('У вас недостаточно средств'); 
        }else{
         if(inputText === ''){
             $('.rand').text('Вы не указали сумму');
         }else{
            inputText = parseInt(inputText);
                  if(namb == rand){
         schet = schet + inputText;
          sunInt = sunInt.text(schet);
          $('.rand').text('Вы ВЫЙГРАЛИ!!!) чесло которое вы выбрали: '+namb+' совпало с чеслом  которое выпола '+rand+' сума выйграша составила '+inputText+' руб');
        }else{
         schet = schet - inputText;
          sunInt = sunInt.text(schet);
          $('.rand').text('Вы ПРОИГРАЛИ!!!( чесло которое вы выбрали: '+namb+' а выпола '+rand+' сума пройграша составила '+inputText+' руб');
        }  

         }
        }
        }

       
        

       namb = 0;
        $('#textSum').val('');
    })


 $('.indexBtn').on('click', function(){
        $(this).siblings().removeClass('action');
        $(this).addClass('action');
    })