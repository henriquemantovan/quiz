"use client";

import React from 'react';
import Link from 'next/link';

const QuizPage = () => {
  return (
    <div className="quiz-container">
      <h1 className="quiz-title">🌟 Descubra qual princesa você é! 🌟</h1>
      <p className="quiz-description">
        Responda o exame ocupacional e veja qual personagem combina mais com a sua personalidade.
      </p>
      <Link href="/quizo">
        <button className="quiz-startButton">
          Iniciar Quiz
        </button>
      </Link>
    </div>
  );
};

export default QuizPage;
