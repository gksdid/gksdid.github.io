// load-header.js

// 비동기적으로 헤더를 로드하는 함수
function loadHeader() {
  // XMLHttpRequest 객체 생성
  var xhttp = new XMLHttpRequest();

  // 헤더 파일의 경로 설정
  xhttp.open("GET", "header.html", true);

  // 요청 완료 시 실행할 함수
  xhttp.onreadystatechange = function () {
    // 요청이 완료되고, 정상적인 응답을 받았을 때
    if (this.readyState == 4 && this.status == 200) {
      // 로드한 헤더를 header-container 요소에 삽입
      document.getElementById("header-container").innerHTML = this.responseText;
    }
  };

  // 요청 보내기
  xhttp.send();
}

// 페이지 로드 시 헤더 로드 함수 호출
window.onload = loadHeader;
