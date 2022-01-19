var bannerStatus = 1;
var bannerTimer = 4000;

window.onload = function(){
  bannerLoop();
}
setTimeout(function(){
  $("#banner-myname").removeClass("hidden");
  $("#banner-underline").removeClass("hidden");
  $("#banner-myname").addClass("banner-name-animation");
  $("#banner-underline").addClass("banner-dash-animation");
},100);

setTimeout(function(){
  $("#banner-myidentity").fadeTo("0", "1").fadeTo("time", "1000")
},1000);

var startBannerLoop = setInterval(function(){
  bannerLoop();
},bannerTimer);

$("#banner-container").mouseover(function(){
  clearInterval(startBannerLoop);
})

$("#banner-container").mouseout(function(){
  startBannerLoop = setInterval(function(){
    bannerLoop();
  },bannerTimer);
})

$("#banner-icon-left").on('click', function(){
  if(bannerStatus==1){
    bannerStatus = 3;
  }
  else if(bannerStatus==2){
    bannerStatus = 4;
  }
  else{
    bannerStatus -= 2;
  }
  bannerBackwardLoop();
})

$("#banner-icon-right").on('click', function(){
  bannerLoop();
})

function bannerLoop(){
  if(bannerStatus == 1){
    $("#banner-img2").css("opacity","0");

    setTimeout(function(){
      $("#banner-img1").css("right", "0%");
      $("#banner-img1").css("zIndex", "2");
      $("#banner-img2").css("right", "-100%");
      $("#banner-img2").css("zIndex", "3");
      $("#banner-img3").css("right", "100%");
      $("#banner-img3").css("zIndex", "1");
      $("#banner-img4").css("right", "100%");
      $("#banner-img4").css("zIndex", "1");
    },500);

    setTimeout(function(){
      $("#banner-img2").css("opacity","1");
    },1000);
    bannerStatus = 2;
  }


  else if(bannerStatus == 2){
    $("#banner-img3").css("opacity","0");

    setTimeout(function(){
      $("#banner-img2").css("right", "0%");
      $("#banner-img2").css("zIndex", "2");
      $("#banner-img3").css("right", "-100%");
      $("#banner-img3").css("zIndex", "3");
      $("#banner-img4").css("right", "100%");
      $("#banner-img4").css("zIndex", "1");
      $("#banner-img1").css("right", "100%");
      $("#banner-img1").css("zIndex", "1");
    },500);

    setTimeout(function(){
      $("#banner-img3").css("opacity","1");
    },1000);
    bannerStatus = 3;
  }

  else if(bannerStatus == 3){
    $("#banner-img4").css("opacity","0");

    setTimeout(function(){
      $("#banner-img3").css("right", "0%");
      $("#banner-img3").css("zIndex", "2");
      $("#banner-img4").css("right", "-100%");
      $("#banner-img4").css("zIndex", "3");
      $("#banner-img1").css("right", "100%");
      $("#banner-img1").css("zIndex", "1");
      $("#banner-img2").css("right", "100%");
      $("#banner-img2").css("zIndex", "1");
    },500);

    setTimeout(function(){
      $("#banner-img4").css("opacity","1");
    },1000);
    bannerStatus = 4;
  }

  else if(bannerStatus == 4){
    $("#banner-img1").css("opacity","0");

    setTimeout(function(){
      $("#banner-img4").css("right", "0%");
      $("#banner-img4").css("zIndex", "2");
      $("#banner-img1").css("right", "-100%");
      $("#banner-img1").css("zIndex", "3");
      $("#banner-img2").css("right", "100%");
      $("#banner-img2").css("zIndex", "1");
      $("#banner-img3").css("right", "100%");
      $("#banner-img3").css("zIndex", "1");
    },500);

    setTimeout(function(){
      $("#banner-img1").css("opacity","1");
    },1000);
    bannerStatus = 1;
  }
}

function bannerBackwardLoop(){
  if(bannerStatus == 1){
    document.getElementById("banner-img3").style.opacity = "0";

    setTimeout(function(){
      document.getElementById("banner-img1").style.right = "0%";
      document.getElementById("banner-img1").style.zIndex = "5";
      document.getElementById("banner-img2").style.right = "-100%";
      document.getElementById("banner-img2").style.zIndex = "1";
      document.getElementById("banner-img3").style.right = "100%";
      document.getElementById("banner-img3").style.zIndex = "3";
      document.getElementById("banner-img4").style.right = "100%";
      document.getElementById("banner-img4").style.zIndex = "3";
    },500);

    setTimeout(function(){
      document.getElementById("banner-img3").style.opacity = "1";
    },1000);
    bannerStatus = 2;
  }


  else if(bannerStatus == 2){
    document.getElementById("banner-img4").style.opacity = "0";

    setTimeout(function(){
      document.getElementById("banner-img2").style.right = "0%";
      document.getElementById("banner-img2").style.zIndex = "5";
      document.getElementById("banner-img3").style.right = "-100%";
      document.getElementById("banner-img3").style.zIndex = "1";
      document.getElementById("banner-img4").style.right = "100%";
      document.getElementById("banner-img4").style.zIndex = "3";
      document.getElementById("banner-img1").style.right = "100%";
      document.getElementById("banner-img1").style.zIndex = "3";
    },500);

    setTimeout(function(){
      document.getElementById("banner-img4").style.opacity = "1";
    },1000);
    bannerStatus = 3;
  }

  else if(bannerStatus == 3){
    document.getElementById("banner-img1").style.opacity = "0";

    setTimeout(function(){
      document.getElementById("banner-img3").style.right = "0%";
      document.getElementById("banner-img3").style.zIndex = "5";
      document.getElementById("banner-img4").style.right = "-100%";
      document.getElementById("banner-img4").style.zIndex = "1";
      document.getElementById("banner-img1").style.right = "100%";
      document.getElementById("banner-img1").style.zIndex = "3";
      document.getElementById("banner-img2").style.right = "100%";
      document.getElementById("banner-img2").style.zIndex = "3";
    },500);

    setTimeout(function(){
      document.getElementById("banner-img1").style.opacity = "1";
    },1000);
    bannerStatus = 4;
  }

  else if(bannerStatus == 4){
    document.getElementById("banner-img2").style.opacity = "0";

    setTimeout(function(){
      document.getElementById("banner-img4").style.right = "0%";
      document.getElementById("banner-img4").style.zIndex = "5";
      document.getElementById("banner-img1").style.right = "-100%";
      document.getElementById("banner-img1").style.zIndex = "1";
      document.getElementById("banner-img2").style.right = "100%";
      document.getElementById("banner-img2").style.zIndex = "3";
      document.getElementById("banner-img3").style.right = "100%";
      document.getElementById("banner-img3").style.zIndex = "3";
    },500);

    setTimeout(function(){
      document.getElementById("banner-img2").style.opacity = "1";
    },1000);
    bannerStatus = 1;
  }
}


$("#banner-circle1").on("click",function(){
  bannerStatus = 1;
  $("#banner-img1").css("right", "0%");
  $("#banner-img1").css("zIndex", "5");
  bannerLoop();
})
$("#banner-circle2").on("click",function(){
  bannerStatus = 2;
  $("#banner-img2").css("right", "0%");
  $("#banner-img2").css("zIndex", "5");
  bannerLoop();
})
$("#banner-circle3").on("click",function(){
  bannerStatus = 3;
  $("#banner-img3").css("right", "0%");
  $("#banner-img3").css("zIndex", "5");
  bannerLoop();
})
$("#banner-circle4").on("click",function(){
  bannerStatus = 4;
  $("#banner-img4").css("right", "0%");
  $("#banner-img4").css("zIndex", "5");
  bannerLoop();
})
