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
