function redirectToPage(page) {
    window.location.href = page;
}

// analytics.js (구글 분석)
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-4VK413KLDK');


// 타이머
// HTML에서 data-target-date 값을 가져옴.
const targetDateAttribute = document.getElementById("countdown").getAttribute("data-target-date");
const targetDate = new Date(targetDateAttribute);

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = `남은 시간: ${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
}

// 페이지 로드 시 초기 업데이트
updateCountdown();

// 1초마다 업데이트
setInterval(updateCountdown, 1000);

