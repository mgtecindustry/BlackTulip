"use client";
import React, { useState, useEffect } from "react";

const MenuPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const meniuUrl =
    "https://oqjgdpuknnexaacahemq.supabase.co/storage/v1/object/sign/TerasaBlackTulip/meniu.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJUZXJhc2FCbGFja1R1bGlwL21lbml1LnBkZiIsImlhdCI6MTczODkxNDAyNiwiZXhwIjoxODk2NTk0MDI2fQ.AvzALbKRhZzeBAnxMd9ouRWNb4DY9zDwpAIQXZyiD60";

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div className="w-full h-screen">
      <iframe
        src={`${meniuUrl}#view=FitW&zoom=page-fit${isMobile ? "&page=1" : ""}`}
        className="w-full h-full border-none"
        style={{
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
        }}
        title="Meniu"
        allow="fullscreen"
      />
    </div>
  );
};

export default MenuPage;
