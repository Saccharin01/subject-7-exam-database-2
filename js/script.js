
function reDirect(location, loadTime){ // ? location = 이동을 원하는 url / loadTime = 몇 초 안에?

  document.addEventListener("DOMContentLoaded", ()=>{ // ? 페이지가 다 로드 되었을 때 시작될 이벤트리스너
    let loadingBar = document.getElementById("innerLoading")

    setTimeout(()=>{
      loadingBar.style.width = 
      window.location.href = `${location}` // ? something 매개변수는 리다이렉트를 걸 html 링크로 할 예정
    },loadTime)
  })
}