$(document).ready(function(){
    $(".burger").click(function(event){
        $(".burger, .menu, .header__body .btn").toggleClass("active")
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.slider', {
      loop: true
    });
  });
// $(document).ready(function(){
//   let count = 0;
//   let counter = setInterval(function(){
//     if(count < 101){
//       $('.count').text(count + '%');
//       $('.loader').css('width' , count + '%');
//       count++
//     }
//     else{
//       clearInterval(counter)
//     }
//   }, 80)
// })