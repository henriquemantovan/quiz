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
              src="/images/rapunzel-princess.gif"
              alt="Primeira Princesa"
              width={300}
              height={300}
              className="princess-image"
              priority
            />
            <p className="princess-text">Você é a RAPUNZEL!!! A segunda princesa mais bonita da Disney</p>
            <button
              onClick={handleDiscoverMore}
              className="discover-button"
            >
              Clique aqui e descubra a primeira
            </button>
          </>
        ) : (
          <>
            <Image
              src="/images/yui.png"
              alt="Julia Maria, princesa do Carrão"
              width={300}
              height={300}
              className="princess-image"
              priority
            />
            <p className="princess-text">Julia Maria! A princesa do Carrão</p>
            <input
            type="text"
            placeholder="Se você gostou do resultado digite seu CPF:"
            style={{
              marginTop: "20px",
              width: "80%",
              padding: "10px",
              fontSize: "1.2rem",
              border: "2px solid #f17e98",
              borderRadius: "8px",
              textAlign: "center",
            }}
          />
          </>
        )}
      </div>
    </div>
  );
};

export default PrincessPage;