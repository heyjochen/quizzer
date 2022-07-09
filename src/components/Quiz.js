import React, { useState, useEffect } from "react";

import Card from "./Card";
import { nanoid } from "nanoid";

const Quiz = () => {
  const [data, setData] = useState([]);

  console.log(data);
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&category=25&difficulty=easy"
      );
      const data = await res.json();
      console.log(data);
      const gameDataArray = [];
      data.results.forEach((e, i) => {
        const answers = [];
        answers.push({
          answer: e.correct_answer,
          isHeld: false,
          correct: true,
          id: nanoid(),
        });

        e.incorrect_answers.forEach((a) => {
          answers.push({
            answer: a,
            isHeld: false,
            correct: false,
            id: nanoid(),
          });
        });

        gameDataArray.push({
          question: e.question,
          answers: answers.sort(() => 0.5 - Math.random()),
          id: nanoid(),
        });
        setData(gameDataArray);
      });
    }
    getData();
  }, []);

  const renderedCards = data.map((data) => {
    return (
      <Card
        question={data.question}
        answers={data.answers}
        key={data.id}
        setData={setData}
        questionId={data.id}
      />
    );
  });

  return <>{renderedCards}</>;
};

export default Quiz;
