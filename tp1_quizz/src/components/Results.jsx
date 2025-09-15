import React from "react";

export default function Results({ questions, answers, onRestart }) {
  const score = questions.reduce((acc, q) => {
    if (answers[q.id] === q.answer) return acc + 1;
    return acc;
  }, 0);

  return (
    <div className="results">
      <h2 className="results-title">
        Résultat : {score} / {questions.length}
      </h2>

      {questions.map((q) => {
        const userAnswer = answers[q.id];
        const isCorrect = userAnswer === q.answer;
        const correctChoice = q.choices.find((c) => c.id === q.answer);

        return (
          <div
            key={q.id}
            className={`result-card ${isCorrect ? "correct" : "incorrect"}`}
          >
            <h3 className="question-text">{q.prompt}</h3>
            <p>
              <strong>Ta réponse :</strong>{" "}
              {userAnswer
                ? q.choices.find((c) => c.id === userAnswer)?.label
                : "Aucune"}
            </p>
            {!isCorrect && (
              <p>
                <strong>Bonne réponse :</strong> {correctChoice.label}
              </p>
            )}
          </div>
        );
      })}

      <button onClick={onRestart} className="restart-btn">
        Recommencer
      </button>
    </div>
  );
}
