// 코인 계산기

  let price = 600;
  let probability1 = 0;
  let probability2 = 0;
  let probability3 = 0;
  let probability5 = 0;
  let probability10 = 0;

  function updateProbabilities(checkboxId) {
    const checkboxes = ['event1', 'event2', 'event3', 'event4'];

    checkboxes.forEach(id => {
      if (id !== checkboxId) {
        document.getElementById(id).checked = false;
      }
    });

    if (document.getElementById(checkboxId).checked) {
      // Set probabilities based on the selected checkbox
      switch (checkboxId) {
        case 'event1':
          price = 600;
          probability1 = 0.3465;
          probability2 = 0.2079;
          probability3 = 0;
          probability5 = 0.0866;
          probability10 = 0;
          break;
        case 'event2':
          price = 540;
          probability1 = 0.2;
          probability2 = 0;
          probability3 = 0.15;
          probability5 = 0;
          probability10 = 0.05;
          break;
        case 'event3':
          price = 540;
          probability1 = 0.3421;
          probability2 = 0;
          probability3 = 0;
          probability5 = 0;
          probability10 = 0;
          break;
        case 'event4':
          price = 540;
          probability1 = 0.6395;
          probability2 = 0;
          probability3 = 0.22;
          probability5 = 0;
          probability10 = 0.08;
          break;
        // 추가 이벤트들에 대해 case 추가 가능
      }
       calculateCoins();  // 이벤트가 선택될 때 바로 계산
    } else {
      // No checkbox selected, reset to default values
      probability1 = 0;
      probability2 = 0;
      probability3 = 0;
      probability5 = 0;
      probability10 = 0.;
    }
  }

  function calculateCoins() {
  const gameCurrency = parseFloat(document.getElementById('gameCurrency').value);


  const numAttempts = 10 * gameCurrency / price;
  const resultElement = document.getElementById('result');
  const roundedCoins = Math.round(expectedCoins(numAttempts)); // 반올림 처리
  // resultElement.innerHTML = `평균 코인 획득량: ${roundedCoins} 코인<br>(${Math.round(numAttempts)} 시도)`;
  resultElement.innerHTML = `${gameCurrency} UC로 약 ${Math.round(numAttempts)}회의 시도를 할 수 있네요.<br><br>평균적으로 ${roundedCoins}개의 교환 코인을<br>획득할 수 있어요!`;

}

    
  function expectedCoins(numAttempts) {
    const coins1 = 1 * numAttempts * probability1;
    const coins2 = 2 * numAttempts * probability2;
    const coins3 = 3 * numAttempts * probability3;
    const coins5 = 5 * numAttempts * probability5;
    const coins10 = 10 * numAttempts * probability10;

    const totalCoins = coins1 + coins2 + coins3 + coins5 + coins10;
    return totalCoins;
  }

    window.onload = calculateCoins;
