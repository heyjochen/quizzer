const Card = ({ question, answers, setData, questionId }) => {
  const clickHandler = (answerId, questionId) => {
    /*
How can you click only one, and how can you flip the one that is selected on click of another button?

The one you click will become opposite and the other ones become false

-> When I click on another button, the previous button has to become false and the new one try
find a way of setting every button that is not the id to isHeld false 
*/

    setData((prevData) => {
      return prevData.map((data) => {
        if (data.id === questionId) {
          data.answers.forEach((answer) => {
            answer.isHeld = false;
            return answer.id === answerId
              ? (answer.isHeld = !answer.isHeld)
              : answer;
          });
        }
        return data;
      });
    });
  };

  return (
    <>
      <h1 className="question">{question}</h1>
      <ul className="answers">
        {answers.map((answer) => {
          return (
            <li
              key={answer.id}
              className={answer.isHeld ? "button--selected" : "button--hollow"}
              onClick={() => clickHandler(answer.id, questionId)}
            >
              {answer.answer}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Card;
