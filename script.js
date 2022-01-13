let loading = document.getElementById("loading");
setTimeout(function(){
  loading.style.opacity = 0;
  setTimeout(function(){
    loading.style.display = "none";
  },200);
},2000);

$(function(){
  $(".first").attr("href","Idaw.html");
});

$(function(){
  $(".second").attr("href","Maglalatik.html");
});

$(function(){
  $(".third").attr("href","sagayan.html");
});

$(function(){
  $(".logos").attr("href","Home.html");
});

$(function(){
  $(".nextButton").attr("href", "sagayan.html")
});

$(function(){
  $(".nextButton2").attr("href", "maglalatik.html")
});

$(function(){
  $(".nextButton3").attr("href", "idaw.html")
});

$(function(){
  $(".prevButton").attr("href", "maglalatik.html")
});

$(function(){
  $(".prevButton2").attr("href", "idaw.html")
});

$(function(){
  $(".prevButton3").attr("href", "sagayan.html")
});

$(".Click").click(function(){
  $(".history").toggle();

});

$(".Click").click(function(){
  $(".history2").toggle();

});

$(".Click").click(function(){
  $(".history3").toggle();

});

$(".Clicked").click(function(){
  $(".used").toggle();
});

$(".Clicked2").click(function(){
  $(".used2").toggle();
});

$(".Clicked3").click(function(){
  $(".used3").toggle();
});
