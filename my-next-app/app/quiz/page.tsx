"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  {
    id: 1,
    question: "Qual é a sua maior qualidade?",
    options: ["Coragem", "Bondade", "Inteligência", "Independência"],
  },
  {
    id: 2,
    question: "Qual seria o seu lugar ideal para morar?",
    options: ["Um castelo", "Na floresta", "No mar", "Na cidade"],
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
    question: "O que você faria se encontrasse um dragão?",
    options: [
      { imgSrc: "/images/a.png", alt: "Salchica" },
      { imgSrc: "/images/b.png", alt: "Frango xadrez com amendoim" },
      { imgSrc: "/images/c.png", alt: "shishi" },
      { imgSrc: "/images/d.png", alt: "leite com mel" },
    ] as ({ imgSrc: string; alt: string } | string)[], // Corrigindo o tipo das opções
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
  const router = useRouter();

  const handleAnswer = (index: number) => {
    setSelectedOption(index); // Marca a opção selecionada

    // Avança para a próxima pergunta ou marca o quiz como completado
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1); // Atualiza o índice da pergunta
        setSelectedOption(null); // Reseta a opção selecionada para a próxima pergunta
      }, 100); // Espera meio segundo antes de passar para a próxima pergunta
    } else {
      setQuizCompleted(true); // Se for a última pergunta, marca o quiz como concluído
    }
  };

  const handleDiscoverPrincess = () => {
    router.push("/rapunzel"); 
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
                  onClick={() => handleAnswer(index)} // Avança automaticamente ao clicar
                >
                  {typeof option === "object" ? ( // Verifica se é uma imagem
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
            <button
              onClick={handleDiscoverPrincess}
              className="discover-button"
            >
              Descubra a Princesa
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
