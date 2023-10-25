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

// 페이지 헤더를 불러옵니다.
import('./header.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('headerContainer').innerHTML = html;
      })
      .catch(error => console.error('Error loading header:', error));
