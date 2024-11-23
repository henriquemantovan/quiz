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
              src="/images/yui.png"
              alt="Julia Maria, princesa do Carrão"
              width={300}
              height={300}
              className="princess-image"
              priority
            />
            <p className="princess-text">Julia Maria! A princesa do Carrão</p>
          </>
        )}
      </div>
    </div>
  );
};

export default PrincessPage;