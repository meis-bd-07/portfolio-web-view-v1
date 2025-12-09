import { useEffect, useState } from "react";

const randomChar = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return chars[Math.floor(Math.random() * chars.length)];
};

export default function DecryptText({text: finalText, speed = 80}: {text: string, speed?: number}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const words = finalText.split(" ");

    // Initialize display with blank placeholders
    setDisplayed(words.map((w) => "".padEnd(w.length, " ")).join(" "));

    const decryptWord = (wordIndex: number) => {
      const target = words[wordIndex];
      let frame = 0;
      const totalFrames = 15;

      const interval = setInterval(() => {
        setDisplayed((prev) => {
          const prevWords = prev.split(" ");
          const newWords = [...prevWords];

          newWords[wordIndex] = target
            .split("")
            .map((letter, i) => (frame < totalFrames ? randomChar() : target[i]))
            .join("");

          return newWords.join(" ");
        });

        frame++;
        if (frame > totalFrames) {
          clearInterval(interval);
          if (wordIndex + 1 < words.length) decryptWord(wordIndex + 1);
        }
      }, speed);
    };

    decryptWord(0);
  }, [finalText, speed]);

  return displayed;
}
