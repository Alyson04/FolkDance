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

$(".Click").click(function(){
  $(".history").toggle();
});

$(".Click2").click(function(){
  $(".used").toggle();
});
