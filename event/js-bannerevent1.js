 // 가격을 전역 변수로 선언. 가격 변동시 수정 필요
        var price = 600;

        // 추가된 부분: 등급에 따른 클래스 스타일
        function getGradeClass(index, gradeText) {
            var classPrefix = 'default-grade'; // 기본값은 검정색

            switch (gradeText) {
                case '얼티밋':
                    classPrefix = 'gold-grade';
                    break;
                case '레드':
                    classPrefix = 'red-grade';
                    break;
                case '핑크':
                    classPrefix = 'pink-grade';
                    break;
                case '퍼플':
                    classPrefix = 'purple-grade';
                    break;
                case '블루':
                    classPrefix = 'blue-grade';
                // 다른 등급에 대한 클래스 추가 가능
            }

            return classPrefix + '-index-' + index;
        }

        document.addEventListener('DOMContentLoaded', function () {
            // 체크박스 클릭 이벤트 리스너 등록
            var checkboxes = document.querySelectorAll('.css-special-table input[type="checkbox"]');
            checkboxes.forEach(function (checkbox) {
                checkbox.addEventListener('change', function () {
                    setTimeout(updateProbabilitySum, 0); // 비동기 처리를 위해 setTimeout 사용
                });
            });

            // 초기 값 계산
            updateProbabilitySum();

            // 추가된 부분: 데이터를 표에 추가
            var tableBody = document.querySelector('.css-special-table tbody');

            // ** 데이터를 불러오는 부분
            fetch('data-bannerevent1.json')
                .then(response => response.json())
                .then(data => {
                    data.forEach(function (item) {
                        var newRow = document.createElement('tr');
                        newRow.classList.add('css-row');

                        // 체크박스 열 추가
                        var checkboxCell = document.createElement('td');
                        checkboxCell.classList.add('css-center');
                        var checkbox = document.createElement('input');
                        checkbox.type = 'checkbox';
                        checkboxCell.appendChild(checkbox);
                        newRow.appendChild(checkboxCell);

                        // 데이터 셀 추가
                        Object.values(item).forEach(function (cellData, index) {
                            var newCell = document.createElement('td');
                            var gradeClass = getGradeClass(index, cellData); // 색상 클래스 가져오기
                            newCell.classList.add('css-center', gradeClass);
                            newCell.textContent = cellData;
                            newRow.appendChild(newCell);
                        });

                        tableBody.appendChild(newRow);
                    });

                    // 체크박스 이벤트 리스너 다시 등록
                    checkboxes = document.querySelectorAll('.css-special-table input[type="checkbox"]');
                    checkboxes.forEach(function (checkbox) {
                        checkbox.addEventListener('change', function () {
                            setTimeout(updateProbabilitySum, 0);
                        });
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        });

        function updateProbabilitySum() {
            var checkboxes = document.querySelectorAll('.css-special-table input[type="checkbox"]');
            var sum = 0;

            checkboxes.forEach(function (checkbox) {
                if (checkbox.checked) {
                    var row = checkbox.closest('tr');
                    var probabilityCell = row.querySelector('.css-center:nth-child(4)');
                    var probabilityText = probabilityCell.textContent.trim();

                    var probabilityMatch = probabilityText.match(/(\d+(\.\d+)?)%/);
                    if (probabilityMatch) {
                        var probability = parseFloat(probabilityMatch[1]);
                        sum += probability;
                    } else {
                        console.error('Error in probability matching:', probabilityText);
                    }
                }
            });

            var resultElement = document.getElementById('probability-sum');
            resultElement.textContent = '확률 합계: ' + sum.toFixed(2) + '%';

            var probabilityAttempts = calculateAttempts(sum);
            var attemptsElement = document.getElementById('probability-attempts');
            attemptsElement.textContent = '예상 횟수: ' + probabilityAttempts + '회';

            var costElement = document.getElementById('cost');
            var costValue = (probabilityAttempts / 10 * price).toFixed(2);
            var costInteger = parseInt(costValue, 10);

            costElement.textContent = '예상 비용: ' + costInteger + ' UC';

            var priceDisplay = document.getElementById('price-display');
            priceDisplay.textContent = price + ' UC';
        }

        function calculateAttempts(probabilitySum) {
            return Math.round((100 / probabilitySum));
        }

        function toggleAllCheckboxes() {
            var checkboxes = document.querySelectorAll('.css-special-table input[type="checkbox"]');
            var selectAllCheckbox = document.getElementById('select-all-checkbox');

            checkboxes.forEach(function (checkbox) {
                checkbox.checked = selectAllCheckbox.checked;
            });
            updateProbabilitySum();
        }
