"use client";

import React, { useState } from "react";
import Image from "next/image";

const PrincessPage = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  const handleDiscoverMore = () => {
    setShowSecondImage(true);
  };

  return (
    <div className="quiz-container">
      <div className="first-screen">
        {!showSecondImage ? (
          <>
            <Image
              src="/images/rapunzel-princess.gif" // Substitua com o caminho para a imagem da primeira princesa
              alt="Primeira Princesa"
              width={300}  // Ajuste o tamanho da imagem
              height={300} // Ajuste o tamanho da imagem
              className="princess-image"
            />
            <p className="princess-text">Você é a RAPUNZEL!!! A segunda princesa mais bonita</p>
            <button
              onClick={handleDiscoverMore}
              className="discover-button"
            >
              Descubra a primeira
            </button>
          </>
        ) : (
          <>
            <Image
              src="/images/yui.png" // Substitua com o caminho para a imagem da segunda princesa
              alt="Julia Maria, princesa do Carrão"
              width={300} // Ajuste o tamanho da imagem
              height={300} // Ajuste o tamanho da imagem
              className="princess-image"
            />
            <p className="princess-text">Julia Maria! A princesa do Carrão</p>
          </>
        )}
      </div>
    </div>
  );
};

export default PrincessPage;
