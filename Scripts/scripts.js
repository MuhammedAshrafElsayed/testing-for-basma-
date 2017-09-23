
$(document).ready(function () {

            var myDate = new Date();
myDate.setDate(myDate.getDate() + 2);
            $("#countdown").countdown(myDate, function (event) {
                $(this).html(
                    event.strftime(
                        '<div class="timer-wrapper"><div class="time">%D</div><span class="text">days</span></div><div class="timer-wrapper"><div class="time">%H</div><span class="text">hrs</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">mins</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">sec</span></div>'
                    )
                );
            });

        });


 function myFunction() {
    var x = document.getElementById('Menuitems');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}
jQuery(function() {

   
$('.owl-partner').owlCarousel({
    loop:true,
   
    responsiveClass:true,
    items:5,autoplay:true ,loop:true,
    
    responsive:{
        0:{
            items:2,
            nav:true
        },
         500:{
            items:3,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
});






$(function() {

var valueBubble = '';

function updateValueBubble(pos, value, context) {
  pos = pos || context.position;
  value = value || context.value;
  var $valueBubble = context.$range.parents(".car-item").find("output");
  var redbtn = context.$range.parents(".car-item").find(".red-btn");
  var greenbtn = context.$range.parents(".car-item").find(".green-btn");
    if(context.max == value)
        {
            redbtn.hide();
            greenbtn.show();
        }
    else{
        redbtn.show();
        greenbtn.hide();
    }
  var tempPosition = pos + context.grabPos;
  var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

  if ($valueBubble.length) {
    $valueBubble[0].innerHTML = value;
  }
}

$('input[type="range"]').rangeslider({
  polyfill: false,
  onInit: function() {
    this.$range.append($(valueBubble));
    updateValueBubble(null, null, this);
  },
  onSlide: function(pos, value) {
    updateValueBubble(pos, value, this);
  }
});
});

$("[data-fancybox]").fancybox({
		// Options will go here
	});
$(".circle-span").click(function (){
    
          
    if($(this).find(".active-case").css('display') == 'none')
        {
             $(this).find(".active-case").show();
            $(this).find(".icon-normal").hide();
        }
    else{
           $(this).find(".active-case").hide();
            $(this).find(".icon-normal").show();
    }
});
$(".i-span").click(function(){
   $(".cars-aucation.loged-in").toggle();
});

$(".info-icon").click(function(){
    $(".cars-aucation.loged-in").toggle();
   $(".cars-aucation.before-log").toggle();
});

$(".set-max-bid").click(function(){
$(this).parents(".car-item").find(".max-bid").toggle(); 
});

$(".btn.my-btn-contact2.black-btn").click(function(){
    $(this).parents(".max-bid").hide();

});