const tips = [
  "Use a password manager like 1Password or NordPass.",
  "Verify links before clicking — phishing is common.",
  "Consider using a VPN on public Wi-Fi networks.",
  "Be cautious with personal info over calls/emails.",
  "Use a breach checker like haveibeenpwned.com.",
  "Keep your software updated for latest protections."
];

const answers = [];

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const qBlock = btn.closest('.question');
    const index = parseInt(qBlock.dataset.index);
    const isYes = btn.classList.contains('yes');
    answers[index] = isYes ? 1 : 0;

    qBlock.querySelectorAll('.btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    const tipBox = qBlock.querySelector('.tip');
    tipBox.textContent = tips[index];
  });
});

document.getElementById('quiz').addEventListener('submit', (e) => {
  e.preventDefault();
  const total = answers.reduce((sum, val) => sum + (val || 0), 0);
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
});
