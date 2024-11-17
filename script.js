let video = document.getElementById('video');
let play_pause = document.getElementById('play_pause');
let playPauseBtn = document.getElementById('playPauseBtn');


let content = document.getElementById('content1');
let LeftBtn = document.getElementById('leftBtn');
let RightBtn = document.getElementById('rightBtn');


let LeftBtn1 = document.getElementById('leftBtn2');
let RightBtn1 = document.getElementById('rightBtn2');


let AddIcon1 = document.getElementById('add-icon1');
let AddIcon2 = document.getElementById('add-icon2');
let AddIcon3 = document.getElementById('add-icon3');
let AddIcon4 = document.getElementById('add-icon4');
let AddIcon5 = document.getElementById('add-icon5');
let AddIcon6 = document.getElementById('add-icon6');
let AddIcon7 = document.getElementById('add-icon7');
let AddIcon8 = document.getElementById('add-icon8');


let box2 = document.getElementById('box2');
let LeftB = document.getElementById('move0');
let RightB = document.getElementById('move1');

if (window.innerWidth < 500) {

  window.addEventListener('scroll', function() {
    if (window.scrollY < 100) {
        video.style.width = "100%";
        video.style.borderRadius = "0";
        play_pause.style.alignItems = "flex-start";
        play_pause.style.right = "3%";
    }
    else if (window.scrollY > 100, window.scrollY < 200) {
        video.style.width = "92.2%";
        video.style.borderRadius = "27.5px";
        play_pause.style.alignItems = "flex-end";
        play_pause.style.right = "6%";
    }
   });




  let clickCount = 0;

  RightBtn.style.cursor = 'pointer';
  LeftBtn.style.cursor = 'pointer';
  LeftBtn.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
  LeftBtn.style.color = 'rgba(88, 88, 88, 0.3)';

  RightBtn.addEventListener('click', function() {
    if( clickCount == 0){
      content.style.transform = 'translateX(-300px)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 1;
    }
    else if( clickCount == 1){
      content.style.transform = 'translateX(-570px)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 2;
    }
    else if( clickCount == 2){
      content.style.transform = 'translateX(-840px)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 3;
    }
    else if( clickCount == 3){
      content.style.transform = 'translateX(-1110px)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 4;
    }
    else if( clickCount == 4){
      content.style.transform = 'translateX(-1380px)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 5;
    }
    else if( clickCount == 5){
      content.style.transform = 'translateX(-1650px)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 6;
    }
    else if( clickCount == 6){
      content.style.transform = 'translateX(-1920px)';
      RightBtn.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
      RightBtn.style.color = 'rgba(88, 88, 88, 0.3)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 7;
    }
  });

  leftBtn.addEventListener('click', function() {
    if( clickCount == 1){
      content.style.transform = 'translateX(0px)';
      LeftBtn.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 0.3)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 0;
    }
    else if( clickCount == 2){
      content.style.transform = 'translateX(-300px)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 1;
    }
    else if( clickCount == 3){
      content.style.transform = 'translateX(-570px)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 2;
    }
    else if( clickCount == 4){
      content.style.transform = 'translateX(-840px)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 3;
    }
    else if( clickCount == 5){
      content.style.transform = 'translateX(-1110px)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 4;
    }
    else if( clickCount == 6){
      content.style.transform = 'translateX(-1380px)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 5;
    }
    else if( clickCount == 7){
      content.style.transform = 'translateX(-1650px)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 6;
    }
  });







  let clickCount1 = 0;

  LeftBtn1.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
  LeftBtn1.style.color = 'rgba(88, 88, 88, 0.3)';

  RightBtn1.addEventListener('click', function() {
    if( clickCount1 == 0){
      models.style.transform = 'translateX(-400px)';
      RightBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 1;
    }
    else if( clickCount1 == 1){
      models.style.transform = 'translateX(-800px)';
      RightBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 2;
    }
    else if( clickCount1 == 2){
      models.style.transform = 'translateX(-1180px)';
      RightBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 3;
    }
    else if( clickCount1 == 3){
      models.style.transform = 'translateX(-1550px)';
      RightBtn1.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 0.3)';
      LeftBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 4;
    }
  });

  LeftBtn1.addEventListener('click', function() {
    if( clickCount1 == 1){
      models.style.transform = 'translateX(0px)';
      LeftBtn1.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 0.3)';
      RightBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 0;
    }
    else if( clickCount1 == 2){
      models.style.transform = 'translateX(-400px)';
      LeftBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 1;
    }
    else if( clickCount1 == 3){
      models.style.transform = 'translateX(-800px)';
      LeftBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 2;
    }
    else if( clickCount1 == 4){
      models.style.transform = 'translateX(-1180px)';
      LeftBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 3;
    }
  });




  let clickCount2 = 0;

  RightB.addEventListener('click', function() {
    if (clickCount2 == 0){
      box2.style.transform = 'translate(-240px)';
      LeftB.style.display = 'flex';
      clickCount2 = 1;
    }
    else if (clickCount2 == 1){
      box2.style.transform = 'translate(-465px)';
      clickCount2 = 2;
    }
    else if (clickCount2 == 2){
      box2.style.transform = 'translate(-810px)';
      RightB.style.display = 'none';
      clickCount2 = 3;
    }
  });

  LeftB.addEventListener('click', function() {
    if (clickCount2 == 1){
      box2.style.transform = 'translate(0px)';
      LeftB.style.display = 'none';
      clickCount2 = 0;
    }
    else if (clickCount2 == 2){
      box2.style.transform = 'translate(-240px)';
      clickCount2 = 1;
    }
    else if (clickCount2 == 3){
      box2.style.transform = 'translate(-465px)';
      RightB.style.display = 'flex';
      clickCount2 = 2;
    }
  });


}


else if (window.innerWidth < 1000) {
    window.addEventListener('scroll', function() {
      if (window.scrollY < 200) {
          video.style.width = "100%";
          video.style.borderRadius = "0";
          play_pause.style.alignItems = "flex-start";
          play_pause.style.right = "3%";
      }
      else if (window.scrollY > 200, window.scrollY < 300) {
          video.style.width = "92.2%";
          video.style.borderRadius = "27.5px";
          play_pause.style.alignItems = "flex-end";
          play_pause.style.right = "6%";
      }
  });
  
  
  
  
  let clickCount = 0;
  
  RightBtn.style.cursor = 'pointer';
  LeftBtn.style.cursor = 'pointer';
  LeftBtn.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
  LeftBtn.style.color = 'rgba(88, 88, 88, 0.3)';
  
  RightBtn.addEventListener('click', function() {
    if( clickCount == 0){
      content.style.transform = 'translateX(-300px)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 1;
    }
    else if( clickCount == 1){
      content.style.transform = 'translateX(-570px)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 2;
    }
    else if( clickCount == 2){
      content.style.transform = 'translateX(-840px)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 3;
    }
    else if( clickCount == 3){
      content.style.transform = 'translateX(-1110px)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 4;
    }
    else if( clickCount == 4){
      content.style.transform = 'translateX(-1380px)';
      RightBtn.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
      RightBtn.style.color = 'rgba(88, 88, 88, 0.3)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 5;
    }
  });
  
  leftBtn.addEventListener('click', function() {
    if( clickCount == 1){
      content.style.transform = 'translateX(0px)';
      LeftBtn.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 0.3)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 0;
    }
    else if( clickCount == 2){
      content.style.transform = 'translateX(-300px)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 1;
    }
    else if( clickCount == 3){
      content.style.transform = 'translateX(-570px)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 2;
    }
    else if( clickCount == 4){
      content.style.transform = 'translateX(-840px)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 3;
    }
    else if( clickCount == 5){
      content.style.transform = 'translateX(-1110px)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 4;
    }
  });
  
  
  
  
  
  
  
  let clickCount1 = 0;
  let LeftBtn1 = document.getElementById('leftBtn2');
  let RightBtn1 = document.getElementById('rightBtn2');
  
  LeftBtn1.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
  LeftBtn1.style.color = 'rgba(88, 88, 88, 0.3)';
  
  RightBtn1.addEventListener('click', function() {
    if( clickCount1 == 0){
      models.style.transform = 'translateX(-400px)';
      RightBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 1;
    }
    else if( clickCount1 == 1){
      models.style.transform = 'translateX(-800px)';
      RightBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 2;
    }
    else if( clickCount1 == 2){
      models.style.transform = 'translateX(-1180px)';
      RightBtn1.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 0.3)';
      LeftBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 3;
    }
  });
  
  LeftBtn1.addEventListener('click', function() {
    if( clickCount1 == 1){
      models.style.transform = 'translateX(0px)';
      LeftBtn1.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 0.3)';
      RightBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 0;
    }
    else if( clickCount1 == 2){
      models.style.transform = 'translateX(-400px)';
      LeftBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 1;
    }
    else if( clickCount1 == 3){
      models.style.transform = 'translateX(-800px)';
      LeftBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 2;
    }
  });
  
  
  let clickCount2 = 0;

  RightB.addEventListener('click', function() {
    if (clickCount2 == 0){
      box2.style.transform = 'translate(-680px)';
      RightB.style.display = 'none';
      LeftB.style.display = 'flex';
      clickCount2 = 1;
    }
  });

  LeftB.addEventListener('click', function() {
    if (clickCount2 == 1){
      box2.style.transform = 'translate(0px)';
      LeftB.style.display = 'none';
      RightB.style.display = 'flex';
      clickCount2 = 0;
    }
  });
}


else{
  window.addEventListener('scroll', function() {
    if (window.scrollY < 467) {
        video.style.width = "100%";
        video.style.borderRadius = "0";
        play_pause.style.alignItems = "flex-start";
        play_pause.style.right = "3%";
    }
    else if (window.scrollY > 467, window.scrollY < 700) {
        video.style.width = "92.2%";
        video.style.borderRadius = "27.5px";
        play_pause.style.alignItems = "flex-end";
        play_pause.style.right = "6%";
    }
    else if (window.scrollY > 700) {
        video.style.width = "87.5%";
        video.style.borderRadius = "41px";
        play_pause.style.alignItems = "flex-end";
        play_pause.style.right = "9%";
    } 
});



  let clickCount = 0;

  RightBtn.style.cursor = 'pointer';
  LeftBtn.style.cursor = 'pointer';
  LeftBtn.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
  LeftBtn.style.color = 'rgba(88, 88, 88, 0.3)';

  RightBtn.addEventListener('click', function() {
    if( clickCount == 0){
      content.style.transform = 'translateX(-400px)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      AddIcon1.style.marginTop = '46.5%';
      AddIcon1.style.marginLeft = '23%';
      AddIcon2.style.marginTop = '46.5%';
      AddIcon2.style.marginLeft = '23%';
      AddIcon3.style.marginTop = '46.5%';
      AddIcon3.style.marginLeft = '23%';
      AddIcon4.style.marginTop = '46.5%';
      AddIcon4.style.marginLeft = '23%';
      AddIcon5.style.marginTop = '46.5%';
      AddIcon5.style.marginLeft = '23%';
      AddIcon6.style.marginTop = '46.5%';
      AddIcon6.style.marginLeft = '23%';
      AddIcon7.style.marginTop = '46.5%';
      AddIcon7.style.marginLeft = '23%';
      AddIcon8.style.marginTop = '46.5%';
      AddIcon8.style.marginLeft = '23%';
      clickCount = 1;
    }
    else if( clickCount == 1){
      content.style.transform = 'translateX(-800px)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 2;
    }
    else if( clickCount == 2){
      content.style.transform = 'translateX(-1200px)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 3;
    }
    else if( clickCount == 3){
      content.style.transform = 'translateX(-1600px)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 4;
    }
    else if( clickCount == 4){
      content.style.transform = 'translateX(-2000px)';
      RightBtn.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
      RightBtn.style.color = 'rgba(88, 88, 88, 0.3)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 5;
    }
  });

  leftBtn.addEventListener('click', function() {
    if( clickCount == 1){
      content.style.transform = 'translateX(0px)';
      LeftBtn.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 0.3)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 0;
    }
    else if( clickCount == 2){
      content.style.transform = 'translateX(-400px)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 1;
    }
    else if( clickCount == 3){
      content.style.transform = 'translateX(-800px)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 2;
    }
    else if( clickCount == 4){
      content.style.transform = 'translateX(-1200px)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 3;
    }
    else if( clickCount == 5){
      content.style.transform = 'translateX(-1600px)';
      LeftBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn.style.color = 'rgba(88, 88, 88, 1)';
      clickCount = 4;
    }
});







  let clickCount1 = 0;

  let LeftBtn1 = document.getElementById('leftBtn2');
  let RightBtn1 = document.getElementById('rightBtn2');

  LeftBtn1.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
  LeftBtn1.style.color = 'rgba(88, 88, 88, 0.3)';

  RightBtn1.addEventListener('click', function() {
    if( clickCount1 == 0){
      models.style.transform = 'translateX(-400px)';
      RightBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 1)';
      LeftBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 1;
    }
    else if( clickCount1 == 1){
      models.style.transform = 'translateX(-800px)';
      RightBtn1.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 0.3)';
      LeftBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 2;
    }
  });

  LeftBtn1.addEventListener('click', function() {
    if( clickCount1 == 1){
      models.style.transform = 'translateX(0px)';
      LeftBtn1.style.backgroundColor = 'rgba(245, 224, 227, 0.3)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 0.3)';
      RightBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 0;
    }
    else if( clickCount1 == 2){
      models.style.transform = 'translateX(-400px)';
      LeftBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      LeftBtn1.style.color = 'rgba(88, 88, 88, 1)';
      RightBtn1.style.backgroundColor = 'rgb(245, 224, 227)';
      RightBtn1.style.color = 'rgba(88, 88, 88, 1)';
      clickCount1 = 1;
    }
  });

}



playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playPauseBtn.classList.add('pause');
    } else {
      video.pause();
      playPauseBtn.style.border = "1.35px solid rgb(0, 47, 255)";
      playPauseBtn.classList.remove('pause');
    }
});






