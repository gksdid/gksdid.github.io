// 페이지에 노출되는 이벤트명
let event1 = "배틀로얄 상자";
let event2 = "레벨업 차량 상자";
let event3 = "커스텀 차량 상자";
let event4 = "레벨업 오토바이 상자";
let event5 = "2023 크리스마스 상자";
let event6 = "종료";
let event7 = "종료";
let event8 = "Fool's Blessing";
let event9 = "ESPORTS FANTASY";

document.addEventListener('DOMContentLoaded', function () {
    calculate();
});

let price;
let piece1, piece2;
let material1, material2, material3, material4;
let paint1, paint2, paint3, paint5;


function calculateExpectedValues(event) {
    piece1 = 0;
    piece2 = 0;
    material1 = 0;
    material2 = 0;
    material3 = 0;
    material4 = 0;
    paint1 = 0;
    paint2 = 0;
    paint3 = 0;
    paint5 = 0;

    switch (event) {
        case 'event1': // 배틀로얄 상자
          price = 1080;
          material1 = 0.0015;
          material2 = 0.001;
          material3 = 0.0005;
          break;
        case 'event2': // 레벨업 차량 상자
          price = 420;
          paint5 = 0.01;
          paint3 = 0.02;
          paint2 = 0.0334;
          break;
        case 'event3': // 커스텀 차량 상자
          price = 420;
          paint5 = 0.01;
          paint3 = 0.02;
          paint2 = 0.0334;
          break;
        case 'event4': // 레벨업 오토바이 상자
          price = 540;
          paint5 = 0.01;
          paint3 = 0.018;
          paint2 = 0.0234;
          break;
        case 'event5': // 종료
          price = 1080;
          material4 = 0.0005;
          material3 = 0.001;
          material2 = 0.002;
          material1 = 0.003; 
          break;
        case 'event6': // 종료
          price = 540;
          material1 = 0;
          paint1 = 0;
          break;
        case 'event7': // 종료
          price = 1080;
          material1 = 0;
          break;
        case 'event8': // Fool's Blessing
          price = 600;
          piece1 = 0.1040;
          break;
        case 'event9': // ESPORTS FANTASY
          price = 540;
          material1 = 0.0059;
          piece2 = 0.0098;
          piece1 = 0.0196;
          paint3 = 0.0490;
          paint2 = 0.0686;
          paint1 = 0.0980;
          break;
        // 추가 이벤트들에 대해 case 추가 가능
    }

    const gameCurrency = parseFloat(document.getElementById('gameCurrency').value);
    const numAttempts = 10 * gameCurrency / price;

    const one = 1 * numAttempts * material1;
    const two = 2 * numAttempts * material2;
    const three = 3 * numAttempts * material3;
    const four = 4 * numAttempts * material4;
    const materialTotal = (one + two + three + four).toFixed(1);

    const pieceTotal = Math.round((piece1 + 2*piece2) * numAttempts);
    const paintTotal = Math.round((paint1 + 2*paint2 + 3*paint3 + 5*paint5) * numAttempts);


    const material = document.getElementById(`${event}-material`);
    material.innerHTML = `<span>${materialTotal != 0 ? materialTotal : '·'}</span>`;

    const piece = document.getElementById(`${event}-piece`);
    piece.innerHTML = `<span>${pieceTotal != 0 ? pieceTotal : '·'}</span>`;

    const paint = document.getElementById(`${event}-paint`);
    paint.innerHTML = `<span>${paintTotal != 0 ? paintTotal : '·'}</span>`;

} 

function calculate() {
  for (let i = 1; i <= 9; i++) {
    const eventName = 'event' + i;
    calculateExpectedValues(eventName);
  }
}

calculate();




