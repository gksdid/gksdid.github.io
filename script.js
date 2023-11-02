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
document.addEventListener('DOMContentLoaded', function () {
    // HTML에서 id가 "countdown"인 요소를 가져옴
    const countdownElement = document.getElementById("countdown");

    // 데이터 속성을 가져올 때 countdownElement에서 직접 가져오도록 변경
    const targetDateAttribute = countdownElement.dataset.targetDate;

    console.log("targetDateAttribute:", targetDateAttribute);

    // 데이터 속성이 undefined가 아닌지 확인
    if (targetDateAttribute !== undefined) {
        const targetDate = new Date(targetDateAttribute);

        // targetDate가 유효한 날짜인지 확인
        if (!isNaN(targetDate.getTime())) {
            function updateCountdown() {
                const currentDate = new Date();
                const timeDifference = targetDate - currentDate;

                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                // countdownElement에 값을 넣기 전에, 값이 유효한지 확인
                if (!isNaN(days) && !isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
                    countdownElement.innerHTML = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
                } else {
                    console.error("Invalid time values");
                }
            }

            // 페이지 로드 시 초기 업데이트
            updateCountdown();

            // 1초마다 업데이트
            setInterval(updateCountdown, 1000);
        } else {
            console.error("Invalid targetDate format");
        }
    } else {
        console.error("targetDateAttribute is undefined");
    }
});


// html 통합 테스트

// 페이지 초기화
document.addEventListener('DOMContentLoaded', function () {
    // 페이지 인덱스를 얻어오는 함수 호출
    var pageIndex = getPageIndexFromUrl();
    setPageData(pagesData[pageIndex]);
});

function setPageData(data) {
    // 페이지 데이터 설정
    document.getElementById('page-title').textContent = data.title;
    document.getElementById('price-display').textContent = data.price;
    document.getElementById('countdown').setAttribute('data-target-date', data.targetDate);
    document.getElementById('sale-period').textContent = data.salePeriod;

    // 데이터 로드 및 처리
    fetchDataAndPopulateTable(data.dataUrl);
}

function getPageIndexFromUrl() {
    // 현재 URL에서 "page" 파라미터 값을 찾아냄
    var urlParams = new URLSearchParams(window.location.search);
    var pageIndex = urlParams.get('page');

    // 만약 "page" 파라미터가 없다면 기본값으로 0을 반환
    return pageIndex ? parseInt(pageIndex, 10) : 0;
}

