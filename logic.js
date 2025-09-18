
document.addEventListener("DOMContentLoaded", function () {
  const quizData = [
    {
      question: "Do you use the same password on multiple sites?",
      answers: ["Yes", "No"],
      correctIndex: 1,
    },
    {
      question: "Do you use a password manager?",
      answers: ["Yes", "No"],
      correctIndex: 0,
    },
    {
      question: "Do you regularly update your software?",
      answers: ["Yes", "No"],
      correctIndex: 0,
    },
    {
      question: "Do you use public Wi-Fi without a VPN?",
      answers: ["Yes", "No"],
      correctIndex: 1,
    },
    {
      question: "Do you click links in unsolicited emails?",
      answers: ["Yes", "No"],
      correctIndex: 1,
    },
    {
      question: "Do you use 2-factor authentication?",
      answers: ["Yes", "No"],
      correctIndex: 0,
    },
  ];

  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");

  let score = 0;

  function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    let rating, tips, icon;
    if (score >= 5) {
      rating = "Good";
      tips = [
        "You're doing great! Stay vigilant.",
        "Keep software updated.",
        "Maintain strong, unique passwords.",
      ];
      icon = "assets/shield-good.svg";
    } else if (score >= 3) {
      rating = "Medium";
      tips = [
        "Avoid reusing passwords.",
        "Enable 2FA wherever possible.",
        "Consider using a VPN on public Wi-Fi.",
      ];
      icon = "assets/shield-medium.svg";
    } else {
      rating = "Poor";
      tips = [
        "Never click on links in suspicious emails.",
        "Start using a password manager.",
        "Enable 2FA and avoid public Wi-Fi.",
      ];
      icon = "assets/shield-poor.svg";
    }

    resultContainer.innerHTML = `
      <h2>Your Privacy Rating: <span>${rating}</span></h2>
      <img src="${icon}" alt="${rating} shield icon" class="shield-icon"/>
      <ul class="tips">
        ${tips.map((tip) => `<li>${tip}</li>`).join("")}
      </ul>
    `;
  }

  function renderQuiz() {
    quizContainer.innerHTML = "";
    quizData.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "quiz-card";
      card.innerHTML = `
        <h3>${item.question}</h3>
        <div class="answers">
          ${item.answers
            .map(
              (answer, i) => `
            <button class="answer-btn" data-question="${index}" data-index="${i}">
              ${answer}
            </button>`
            )
            .join("")}
        </div>
      `;
      quizContainer.appendChild(card);
    });

    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach((btn) =>
      btn.addEventListener("click", function () {
        const qIndex = parseInt(this.getAttribute("data-question"));
        const aIndex = parseInt(this.getAttribute("data-index"));

        if (aIndex === quizData[qIndex].correctIndex) {
          score++;
        }

        // Disable all buttons for this question
        const buttons = this.parentElement.querySelectorAll("button");
        buttons.forEach((b) => {
          b.disabled = true;
          b.classList.add("disabled");
        });

        this.classList.add("selected");

        // If last question answered, show result
        if (
          document.querySelectorAll(".answer-btn.selected").length ===
          quizData.length
        ) {
          setTimeout(showResult, 500);
        }
      })
    );
  }

  renderQuiz();
});
