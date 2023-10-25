// 페이지 맨 위로
function scrollToTop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
        }

// header 로딩
        document.addEventListener('DOMContentLoaded', function () {
            fetch('path/to/header.html') // header.html의 경로를 설정
                .then(response => response.text())
                .then(data => {
                    document.getElementById('page-header').innerHTML = data;
                });
        });
