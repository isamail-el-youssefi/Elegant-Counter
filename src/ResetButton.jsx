import { ResetIcon } from "@radix-ui/react-icons";

const ResetButton = ({ setCount }) => {
  const handleClick = (e) => {
    setCount(0);
    e.currentTarget.blur();

    // Increment by 2 if the current count is even, otherwise increment by 1
    /*     setCount((prevCount) =>
      prevCount % 2 === 0 ? prevCount + 1 : prevCount + 2
    ); */
  };

  return (
    <button className="reset-btn" onClick={handleClick}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
};

export default ResetButton;
