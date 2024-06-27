const reDirect = (url, loadTime)=>{ // ? location = 이동을 원하는 url / loadTime = 몇 초 안에?
  const loadingBar = document.getElementById("innerLoading")
  
  setTimeout(()=>{
    if(someCondition){

      loadingBar.style.width = condition  // todo 이 안에 로딩바를 움직일 뭔가가 들어가야 함
    // ? 재귀도 찍어야 하는데?
    // todo 매개변수로 들어온 밀리 초를 이용해서 로딩 바의 너비가 늘어나야 함.

    reDirect()
    } else {
      window.location.href = url // ? something 매개변수는 리다이렉트를 걸 html 링크로 할 예정
    }
    },loadTime)
}


reDirect("slide2.html",10000)