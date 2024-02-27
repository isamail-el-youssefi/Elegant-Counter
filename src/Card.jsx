import { useEffect, useState } from "react";
import ButtonContainer from "./ButtonContainer";
import Count from "./Count";
import ResetButton from "./ResetButton";
import Title from "./Title";
import CountButtons from "./CountButtons";

const Card = () => {
  const [count, setCount] = useState(0);
  const block = count === 8 ? true : false;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        const newCount = count + 1;
        if (newCount > 8) {
          return setCount(8);
        }
        setCount(newCount);
      }
    };
    //window.addEventListener("",)
    window.addEventListener("keydown", handleKeyDown);
    //clean up
    return () => {
      window.addEventListener("keydown", handleKeyDown);
    };
  }, [count]);

  return (
    <div className={`card ${block ? "card--limit" : ""}`}>
      <Title block={block} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      {/*  THE OLD WAY PROPS DRILLING     <ButtonContainer setCount={setCount} block={block} />
       */}
      <ButtonContainer>
      <CountButtons type="minus" setCount={setCount} block={block} />
      <CountButtons type="plus" setCount={setCount} block={block}  />
      </ButtonContainer>
    </div>
  );
};

export default Card;
