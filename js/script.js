const reDirect = (url, loadTime)=>{

  const loadingBar = document.querySelector(".innerLoading")
  let condition = 0
  let maxCount = 100


  function animation(){
    if(condition < maxCount){
      
      // setTimeout(()=>{
          // todo 이 안에 로딩바를 움직일 뭔가가 들어가야 함
          // ? 재귀도 찍어야 하는데?
          // todo 매개변수로 들어온 밀리 초를 이용해서 로딩 바의 너비가 늘어나야 함.
          console.log(condition)
          condition++
          loadingBar.style.width = `${condition}%`
          setTimeout(animation,16)
        // animation()
      // },16)
    }else{
      window.location.href = url // ? something 매개변수는 리다이렉트를 걸 html 링크로 할 예정
    }
  }
  setTimeout(animation,loadTime)
}


document.addEventListener("DOMContentLoaded", ()=>{
  reDirect("slide2.html",1000)
})