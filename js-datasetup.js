// datasetup


// 추가된 부분: 등급에 따른 클래스 스타일
function getGradeClass(index, gradeText) {
    var classPrefix = 'default-grade'; // 기본값은 검정색

    switch (gradeText) {
        case '골드':
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
    attemptsElement.textContent = '평균 횟수: ' + probabilityAttempts + '회';

    var costElement = document.getElementById('cost');
    var costValue = (probabilityAttempts / 10 * price).toFixed(2);
    var costInteger = parseInt(costValue, 10);

    costElement.textContent = '평균 비용: ' + costInteger + ' UC';

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

function setPrice(newPrice) {
    price = newPrice;
}

function getPrice() {
    return price;
}
