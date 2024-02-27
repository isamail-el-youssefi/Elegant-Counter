import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const CountButtons = ({ setCount, type, block }) => {
  const handleClick = (e) => {
    setCount((prev) => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        } else {
          return newCount;
        }
      } else {
        const newCount = prev + 1;
        return newCount;
      }
    });
    //to infocuse the button (FOCUS !== BLUR)
    e.currentTarget.blur();
  };

  return (
    <button disabled={block} className="count-btn" onClick={handleClick}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
};

export default CountButtons;
