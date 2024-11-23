"use client"; // Necessário para habilitar interatividade

import React from 'react';
import { useRouter } from 'next/navigation';

const QuizPage = () => {
  const router = useRouter();

  const handleStartQuiz = () => {
    router.push('/quiz'); // Redireciona para a página do quiz
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">🌟 Descubra qual princesa você é! 🌟</h1>
      <p className="quiz-description">
        Responda o exame ocupacional e veja qual personagem combina mais com a sua personalidade.
      </p>
      <button className="quiz-startButton" onClick={handleStartQuiz}>
        Iniciar Quiz
      </button>
    </div>
  );
};

export default QuizPage;
