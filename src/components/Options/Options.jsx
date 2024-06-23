import css from "../Options/Options.module.css";

const Options = ({ text, updateFeedback, resetFeedback, totalFeedback }) => {
  const handleClick = () => {
    updateFeedback();
  };

  const handleReset = () => {
    resetFeedback();
  };

  return (
    <>
      <button
        className={css.btn}
        onClick={totalFeedback > 0 ? handleReset : handleClick}
      >
        {" "}
        {text}
      </button>
    </>
  );
};

export default Options;
