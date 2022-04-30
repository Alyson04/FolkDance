let loading = document.getElementById("loading");
setTimeout(function(){
  loading.style.opacity = 0;
  setTimeout(function(){
    loading.style.display = "none";
  },200);
},2000);

$(function(){
  $(".first").attr("href","idaw.html");
});

$(function(){
  $(".second").attr("href","maglalatik.html");
});

$(function(){
  $(".third").attr("href","sagayan.html");
});

$(function(){
  $(".logos").attr("href","index.html");
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

$(".first").hide();
$("#aw").click(function(){
  $(".first").toggle();
});

$(".third").hide();
$("#sa").click(function(){
  $(".third").toggle();
});

$(".second").hide();
$("#lat").click(function(){
  $(".second").toggle();
});
