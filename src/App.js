import quotes from "./quotes.json";

import "./styles.css";

import { useState } from "react";

import QuoteBox from "./components/QuoteBox";

const colors = [
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FF9671",
  "#FFC75F",
  "#F9F871"
];

export default function App() {
  /*
  const quote = quotes[0].quote;
  console.log(quote);
  */

  const [quote, setQuote] = useState(quotes[getNumber(quotes.length)]);
  const [background, setBackground] = useState(
    colors[getNumber(colors.length)]
  );

  const handleQuote = () => {
    const index = getNumber(quotes.length);
    setQuote(quotes[index]);
    setBackground(colors[getNumber(colors.length)]);
  };

  return (
    <div className="app" style={{ background }}>
      <QuoteBox
        phrase={quote.quote}
        writer={quote.author}
        changeUser={handleQuote}
        background={background}
      />
    </div>
  );
}

const getNumber = (max) => Math.floor(Math.random() * max);
