const time = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let state ="start";
let timerId;

//時間表示部分

//スタートボタン

  start.addEventListener("click",() => {
     if (state === "start"){
         state = "stop";

      let startMs = Date.now(); //開始時間

      timerId = setInterval(() => {
        let nowMs = Date.now();
        let progressedMs = nowMs - startMs;
        let ms = progressedMs % 10;
        let s  = Math.floor(progressedMs / 1000) % 10; 
        let zs  = Math.floor(progressedMs / 1000 /10) % 6;
        let m = Math.floor(progressedMs / 1000 / 60) % 60;


        time.textContent = `${m}:${zs}:${s}:${ms}`;
      }, 10);
     } else{
      state = "start"
     
     }

    
      document.getElementById('start').setAttribute("disabled", true);
      document.getElementById('stop').removeAttribute("disabled");
      document.getElementById('reset').setAttribute("disabled", true);
    });
      
  


//ストップボタン
stop.addEventListener("click",() => {
  clearInterval(timerId);
  document.getElementById('stop').setAttribute("disabled", true);
  document.getElementById('start').setAttribute("disabled", true);
  document.getElementById('reset').removeAttribute("disabled");


});





//リセットボタン
reset.addEventListener("click",() => {
  state = "start";
  progressedMs = 0;
  time.textContent = "0:0:0:0";


  document.getElementById('reset').setAttribute("disabled", true);
  document.getElementById('start').removeAttribute("disabled");
  document.getElementById('stop').setAttribute("disabled", true);
});