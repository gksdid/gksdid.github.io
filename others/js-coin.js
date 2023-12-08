// 페이지에 노출되는 이벤트명
let event1 = "The Fool's Blessing";
let event2 = "PMGC (중복반영)";
let event3 = "ESPORTS FANTASY";
let event4 = "PAGANI 상자";
let event5 = "Hola Buddy";
let event6 = "PDP";

// 기본값: 수정 필요하지 않음
  let price;
  let probability1, probability2, probability3, probability5;
  let probability10, probability50, probability100;
  let probability40, probability60;

  function updateProbabilities(checkboxId) {
    const checkboxes = ['event1', 'event2', 'event3', 'event4', 'event5', 'event6'];

  price = 600;
  probability1 = 0;
  probability2 = 0;
  probability3 = 0;
  probability5 = 0;
  probability10 = 0;
  probability50 = 0;
  probability40 = 0;
  probability60 = 0;
  probability100 = 0;

    checkboxes.forEach(id => {
      if (id !== checkboxId) {
        document.getElementById(id).checked = false;
      }
    });

    if (document.getElementById(checkboxId).checked) {
      // Set probabilities based on the selected checkbox
      switch (checkboxId) {
        case 'event1': // Fool's Blessing
          price = 600;
          probability1 = 0.3465;
          probability2 = 0.2079;
          probability5 = 0.0866;
          break;
        case 'event2': // pmgc
          price = 270;
          probability1 = 0.5926;
          probability10 = 0.0237;
          probability40 = 0.0213;
          break;
        case 'event3': // ESPORTS FANTASY
          price = 540;
          probability1 = 0.3429;
          break;
        case 'event4': // 파가니
          price = 1620;
          probability50 = 0.02;
          probability100 = 0.008;
          break;
        case 'event5': // 버디
          price = 270;
          probability1 = 0.5926;
          break;
        case 'event6': // pdp
          price = 270;
          probability1 = 0.5926;
          break;
        // 추가 이벤트들에 대해 case 추가 가능
      }
       calculateCoins();  // 이벤트가 선택될 때 바로 계산
      
    } 
  }

  function calculateCoins() {
  const gameCurrency = parseFloat(document.getElementById('gameCurrency').value);


  const numAttempts = 10 * gameCurrency / price;
  const resultElement = document.getElementById('result');
  const roundedCoins = Math.round(expectedCoins(numAttempts)); // 반올림 처리
  // resultElement.innerHTML = `평균 코인 획득량: ${roundedCoins} 코인<br>(${Math.round(numAttempts)} 시도)`;
  resultElement.innerHTML = `약 <span class="text-highlight">${Math.round(numAttempts)}회</span>의 시도가 가능하네요.<br>
  평균적으로 <span class="text-highlight">${roundedCoins}개</span>의 교환코인을 획득합니다!`;

}

    
  function expectedCoins(numAttempts) {
    const coins1 = 1 * numAttempts * probability1;
    const coins2 = 2 * numAttempts * probability2;
    const coins3 = 3 * numAttempts * probability3;
    const coins5 = 5 * numAttempts * probability5;
    const coins10 = 10 * numAttempts * probability10;
    const coins40 = 40 * numAttempts * probability40;
    const coins50 = 50 * numAttempts * probability50;
    const coins60 = 60 * numAttempts * probability60;
    const coins100 = 100 * numAttempts * probability100;

    const totalCoins = coins1 + coins2 + coins3 + coins5 + coins10 + coins40 + coins50 + coins60 + coins100;
    return totalCoins;
  }
