document.querySelectorAll(".answer-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const siblings = this.parentNode.querySelectorAll(".answer-btn");
    siblings.forEach(sib => sib.classList.remove("selected"));
    this.classList.add("selected");
  });
});

document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;
  const buttons = document.querySelectorAll(".answer-btn.selected");
  if (buttons.length < 5) {
    alert("Please answer all questions.");
    return;
  }
  buttons.forEach(btn => score += parseInt(btn.dataset.score));
  const resultText = document.getElementById("score-text");
  const resultMsg = document.getElementById("score-message");

  if (score >= 8) {
    resultText.textContent = "Good";
    resultMsg.textContent = "You're doing well. Keep maintaining your privacy practices!";
  } else if (score >= 4) {
    resultText.textContent = "Medium";
    resultMsg.textContent = "Some improvements needed. Consider using a VPN or password manager.";
  } else {
    resultText.textContent = "Poor";
    resultMsg.textContent = "Your online privacy is at risk. Take action now to secure your data.";
  }

  document.getElementById("results").classList.remove("hidden");
  document.getElementById("results").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("retake-btn").addEventListener("click", function () {
  document.querySelectorAll(".answer-btn").forEach(btn => btn.classList.remove("selected"));
  document.getElementById("results").classList.add("hidden");
  document.getElementById("score-text").textContent = "";
  document.getElementById("score-message").textContent = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
});