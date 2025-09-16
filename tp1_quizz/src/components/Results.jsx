export default function Results({ questions, answers, onRestart }) {
  const score = questions.reduce(
    (acc, q) => (answers[q.id] === q.answerId ? acc + 1 : acc),
    0
  );

  return (
    <div className="results">
      <h2 className="results-title">
        Résultat : {score} / {questions.length}
      </h2>

      {questions.map((q) => {
        const userAnswer = answers[q.id];
        const isCorrect = userAnswer === q.answerId;
        const correctChoice = q.choices.find(c => c.id === q.answerId);
        const selectedChoice = q.choices.find(c => c.id === userAnswer);

        return (
          <div
            key={q.id}
            className={`result-card ${isCorrect ? "correct" : "incorrect"}`}
          >
            <h3 className="question-text">{q.prompt}</h3>
            <p>
              <strong>Ta réponse :</strong> {selectedChoice ? selectedChoice.label : "Aucune"}
            </p>
            {!isCorrect && (
              <p>
                <strong>Bonne réponse :</strong> {correctChoice?.label || "N/A"}
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
