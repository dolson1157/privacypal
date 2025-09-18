function runAudit() {
  const result = document.getElementById("result");
  const tips = document.getElementById("tips");
  const scoreOption = document.getElementById("scoreSelect").value;

  let data = {
    good: {
      score: 92,
      message: "You're in great shape! Only minor recommendations.",
      tips: [
        "Still consider using a password manager.",
        "Enable 2FA where available."
      ]
    },
    medium: {
      score: 67,
      message: "Some issues detected — review suggested fixes.",
      tips: [
        "Check if your email has been part of any breaches.",
        "Review your browser extensions and remove unnecessary ones.",
        "Use tracker blockers for everyday browsing."
      ]
    },
    poor: {
      score: 39,
      message: "Multiple privacy concerns found. Take action soon.",
      tips: [
        "Change passwords for breached accounts.",
        "Consider a reputable VPN for public networks.",
        "Audit all app permissions on your phone."
      ]
    }
  };

  const selected = data[scoreOption];
  result.innerHTML = `
    <h2>Privacy Score: ${selected.score}%</h2>
    <p>${selected.message}</p>
  `;
  result.classList.remove("hidden");

  tips.innerHTML = `<h3>Tips:</h3><ul>${selected.tips.map(t => `<li>${t}</li>`).join('')}</ul>`;
}