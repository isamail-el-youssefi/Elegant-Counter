import ButtonContainer from "./ButtonContainer";
import Count from "./Count";
import ResetButton from "./ResetButton";
import Title from "./Title";

const Card = () => {
  return (
    <div className="card">
      <Title />
      <Count />
      <ResetButton />
      <ButtonContainer />
    </div>
  );
};

export default Card;