"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    // Explosão de papéis coloridos ao entrar na página
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    const colors = ["#ff5e5e", "#5ec8ff", "#ffd85e", "#5eff8f", "#c05eff"];

    // Uma explosão central logo de cara
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 },
      colors,
    });

    // Alguns disparos extras dos cantos para reforçar o efeito
    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <main className={styles.wrapper}>
      <div className={styles.rectangle}>
        <div className={styles.version}>1.0.0</div>
      </div>
    </main>
  );
}
