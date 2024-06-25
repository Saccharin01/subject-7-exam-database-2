const testBed = (timeOut)=>{
  setTimeout(()=>{
    window.location.href = 'b.html' // todo 경로 처리 생각해야 함
  },timeOut) // todo timeOut 변수에 대한 타입 검역이 필요하지 않음?
  // todo 그럴거면 생성자 함수가 더 맞을거 같은데?
}



function reDirect(location, loadTime){ // ? location = 이동을 원하는 url / loadTime = 몇 초 안에?

  document.addEventListener("DOMContentLoaded", ()=>{ // ? 페이지가 다 로드 되었을 때 시작될 이벤트리스너

    setTimeout(()=>{
      window.location.href = `${location}` // ? something 매개변수는 리다이렉트를 걸 html 링크로 할 예정
    },loadTime)
  })
}

// todo 위의 함수를 생성자 함수 + 매개변수의 데이터타입 검역 절차를 추가해보는 건 어떨까?
/**
 * todo 단위테스트 : 돔 컨텐츠가 로드 되기 전에는 어떻게 되는지?
 * todo : 움직이는 부분을 UX를 생각해서 인디케이터 같은 걸 넣어야 하지 않나? (우리가 만든다고 했던 로딩 바 같은거)
 * todo 단위테스트 :
 * todo 단위테스트 :
 * todo 단위테스트 :
 * 
 */
