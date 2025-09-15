import React from "react";

export default function QuestionCard({ question, selected, onSelect }) {
  return (
    <div className="question-card">
      <h2 className="question-text">{question.prompt}</h2>
      <div className="choices">
        {question.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => onSelect(question.id, choice.id)}
            className={`choice-btn ${selected === choice.id ? "selected" : ""}`}
          >
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}
