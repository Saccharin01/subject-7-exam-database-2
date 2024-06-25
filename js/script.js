const testBed = (timeOut)=>{
  setTimeout(()=>{
    window.location.href = 'b.html' // todo 경로 처리 생각해야 함
  },timeOut) // todo timeOut 변수에 대한 타입 검역이 필요하지 않음?
  // todo 그럴거면 생성자 함수가 더 맞을거 같은데?
}



function reDirect(something){
document.addEventListener("DOMContentLoaded", ()=>{
  setTimeout(()=>{
    window.location.href = `${something}`
  })

})
}

/**
 * 
 * let seconds = 5;
    function countdown() {
      document.getElementById('countdown').textContent = seconds;
      if (seconds > 0) {
        seconds--;
        setTimeout(countdown, 1000);
      } else {
        window.location.href = 'b.html';
      }
    }
    window.onload = countdown;
 */