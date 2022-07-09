import Button from "./Button";

const Intro = ({ setStarted }) => {
  const startGame = () => {
    setStarted((prev) => !prev);
  };

  return (
    <>
      <div className="intro">
        <h1 className="intro__heading">Quizzer</h1>
        <p className="intro__question">Can you get a perfect score?</p>
        <Button
          className="intro__button button--filled"
          text="Start quiz"
          onClick={startGame}
        />
      </div>
    </>
  );
};

export default Intro;
