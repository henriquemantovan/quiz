"use client";

import React, { useState } from "react";
import Link from "next/link";

const questions = [
  {
    id: 1,
    question: "Qual é a sua maior qualidade?",
    options: ["Coragem", "Bondade", "Inteligência", "Beleza"],
  },
  {
    id: 2,
    question: "Que aparição artistica não esteve na Nostalgia?",
    options: ["System of a down", "MC Lan", "MC Lan (novamente)", "Michael Jackson "],
  },
  {
    id: 3,
    question: "Se você entrasse no carro e seu namorado tivesse dirigindo com a sua melhor amiga no banco da frente, o que você faria?",
    options: ["Sairia do carro descontente", "Fazer cara de emburrada", "Falar que esta incomodada", "Gravaria um tiktok"],
  },
  {
    id: 4,
    question: "O que você estava estudando antes?",
    options: ["Circuitos", "Circuitos", "Circuitos", "Circuitos"],
  },
  {
    id: 5,
    question: "Qual sua comida favorita?",
    options: [
      { imgSrc: "/images/a.png", alt: "Salchica" },
      { imgSrc: "/images/b.png", alt: "Frango xadrez com amendoim" },
      { imgSrc: "/images/c.png", alt: "shishi" },
      { imgSrc: "/images/d.png", alt: "leite com mel" },
    ] as ({ imgSrc: string; alt: string } | string)[],
  },
  {
    id: 6,
    question: "Qual princesa você mais se identifica?",
    options: ["Cinderela", "Fiona", "Rapunzel", "Ariel"],
  },
];

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedOption(index);

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      }, 100);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        {!quizCompleted ? (
          <>
            <h2 className="quiz-title">{questions[currentQuestionIndex].question}</h2>
            <div className="options-container">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <label
                  key={index}
                  className={`option ${selectedOption === index ? "selected" : ""}`}
                  onClick={() => handleAnswer(index)}
                >
                  {typeof option === "object" ? (
                    <img
                      src={option.imgSrc}
                      alt={option.alt}
                      className={`option-image ${selectedOption === index ? "selected" : ""}`}
                    />
                  ) : (
                    <>
                      <input
                        type="radio"
                        name="option"
                        value={index}
                        checked={selectedOption === index}
                        onChange={() => {}}
                        className="hidden-input"
                      />
                      <span>{option}</span>
                    </>
                  )}
                </label>
              ))}
            </div>
          </>
        ) : (
          <div className="quiz-completed">
            <h2 className="quiz-title">Você terminou o quiz!</h2>
            <Link href="/rapunzel">
              <button className="discover-button">
                Descubra a Princesa
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
