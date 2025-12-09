import { useState, useLayoutEffect } from "react";

function stripHTML(htmlText: string) {
  // Check if there is any HTML tag present
  if (/<[^>]+>/g.test(htmlText)) {
    return htmlText.replace(/<[^>]+>/g, "");
  }
  // No HTML, return as-is
  return htmlText;
}

export default function AnimatedTextBlock({
  htmlText, speed = 70, classes = "", containerClass = "p-6 tracking-wide leading-relaxed"
}: {
  htmlText: string; speed?: number; classes?: string; containerClass?: string
}) {
  htmlText = htmlText ? htmlText.replace(/className/g, "class") : htmlText;
  // Extract plain text by removing HTML tags
  const plainText = stripHTML(htmlText)

  const [typedText, setTypedText] = useState("");
  const [done, setDone] = useState(false);

  useLayoutEffect(() => {
    if(!plainText){return}
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(plainText.slice(0, index + 1));
      index++;

      if (index === plainText.length) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 150);
      }
    }, speed);

    return () => clearInterval(interval || '');
  }, [plainText, speed]);

  return (
    <div className={containerClass}>
      {done ? (
        // FINAL HTML (fully styled)
        <div dangerouslySetInnerHTML={{ __html: htmlText }} />
      ) : (
        // TYPING PHASE
        <>
          <span className={classes} dangerouslySetInnerHTML={{ __html: typedText }} />
          <span className="inline-block w-px h-3 ml-1 bg-gray-500 animate-pulse" />
        </>
      )}
    </div>
  );
}
