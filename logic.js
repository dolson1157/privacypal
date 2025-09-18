
const answers = new Array(6).fill(null);

function answerQuestion(index, value) {
  answers[index] = value;
  const yesBtn = document.querySelector(`#q${index} .yes`);
  const noBtn = document.querySelector(`#q${index} .no`);
  yesBtn.classList.toggle('selected', value === 1);
  noBtn.classList.toggle('selected', value === 0);
}

function calculateScore() {
  const total = answers.reduce((sum, val) => sum + (val === 1 ? 1 : 0), 0);
  const result = document.getElementById('result');
  result.classList.remove('hidden');
  const scoreText = result.querySelector('.score');
  const summary = result.querySelector('.summary');

  if (total <= 1) {
    scoreText.textContent = "Good ✅ (0–1 risky answers)";
    summary.textContent = "You're doing great — just keep it up!";
  } else if (total <= 3) {
    scoreText.textContent = "Medium ⚠️ (2–3 risky answers)";
    summary.textContent = "Some habits need work. Start with safer passwords and checking links.";
  } else {
    scoreText.textContent = "Poor 🚨 (4+ risky answers)";
    summary.textContent = "Your digital privacy is at risk. Take action to protect your accounts.";
  }
}
