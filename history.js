const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount, currentWpm, accuracy) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>Your Typing Speed is  <span class="bold">${currentWpm}</span> WPM</p>
    <p>Your Accuracy is  <span class="bold ">${accuracy}</span> %</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount, currentWpm, accuracy });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    newRow.innerHTML = `
      <h3>${test.questionText}</h3>
      <p>You took: <span class="bold">${test.timeTaken}</span> seconds</p>
      <p>Your Typing Speed is  <span class="bold red">${test.currentWpm}</span> WPM</p>
      <p>Your Accuracy is  <span class="bold ">${test.accuracy}</span> %</p>
      <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  `;

    histories.appendChild(newRow);
  });
}
