let data = [
  {
    question: "Who painted the Sistine Chapel?",
    answers: [
      {
        answer: "Michelangelo",
        isHeld: false,
        correct: true,
        id: "65FxnYTNCEgXEVRqa__gq",
      },
      {
        answer: "Leonardo da Vinci",
        isHeld: false,
        correct: false,
        id: "eM-U08LqFirbLigg0-M6x",
      },
      {
        answer: "Raphael",
        isHeld: false,
        correct: false,
        id: "BvupN4jTBEHnJ2EjQXGEn",
      },
      {
        answer: "Pablo Picasso",
        isHeld: false,
        correct: false,
        id: "I3-c3QZuiB3GyCGl0qxAb",
      },
    ],
    id: "npdICP9XF6QWAABUtdg89",
  },
  {
    question: "Leonardo da Vinci&#039;s Mona Lisa does not have eyebrows.",
    answers: [
      {
        answer: "True",
        isHeld: false,
        correct: true,
        id: "gUzmm-BdCPkb0yWnm-XSl",
      },
      {
        answer: "False",
        isHeld: false,
        correct: false,
        id: "EnLwPPQUTXDPoOU8UBxL1",
      },
    ],
    id: "UGbWXiErU7WCtRFEORwu_",
  },
  {
    question:
      "Who painted &quot;Swans Reflecting Elephants&quot;, &quot;Sleep&quot;, and &quot;The Persistence of Memory&quot;?",
    answers: [
      {
        answer: "Salvador Dali",
        isHeld: false,
        correct: true,
        id: "QispUIav0Ac_pYsFv4ayU",
      },
      {
        answer: "Jackson Pollock",
        isHeld: false,
        correct: false,
        id: "IUczo4Ij6os36FX6MGojQ",
      },
      {
        answer: "Vincent van Gogh",
        isHeld: false,
        correct: false,
        id: "6MWFRpe6CWgRf9ECOo7Ib",
      },
      {
        answer: "Edgar Degas",
        isHeld: false,
        correct: false,
        id: "7yJ6Y48mxbKF7nQn__fVd",
      },
    ],
    id: "PWsgGHjfZvEUBpabwXmqZ",
  },
  {
    question: "Leonardo da Vinci was not the creator of the Mona Lisa.",
    answers: [
      {
        answer: "True",
        isHeld: false,
        correct: false,
        id: "1tkHmWg7T81yaz_pkvjmV",
      },
      {
        answer: "False",
        isHeld: false,
        correct: true,
        id: "puYrUN-Ru9IOCqPVkACzF",
      },
    ],
    id: "vse96mKu0alB9ISg-eSzg",
  },
  {
    question: "Who painted the biblical fresco The Creation of Adam?",
    answers: [
      {
        answer: "Leonardo da Vinci",
        isHeld: false,
        correct: false,
        id: "LT_YhBMxicUz09LDy0uDv",
      },
      {
        answer: "Caravaggio",
        isHeld: false,
        correct: false,
        id: "Qj_b-FxZumjQBgV_nAxUe",
      },
      {
        answer: "Michelangelo",
        isHeld: false,
        correct: true,
        id: "E1ByHZg6vt3Wwt68yLP4l",
      },
      {
        answer: "Rembrandt",
        isHeld: false,
        correct: false,
        id: "MO9dXkAwPnwNh_M1yQC5G",
      },
    ],
    id: "XlYkoLgOd8TP5lOFvrHD1",
  },
];

function change() {
  return data.map((question) => {
    question.answers.forEach((answer) => {
      answer.id === "65FxnYTNCEgXEVRqa__gq" ? (answer.isHeld = true) : answer;
    });
    return question;
  });
}

change();

function change() {
  data.forEach((question) => {
    question.answers.forEach((answer) => {
      answer.id === "65FxnYTNCEgXEVRqa__gq" ? (answer.isHeld = true) : answer;
    });
  });
  return data;
}

const clickHandler = (id) => {
  setData((prevData) => {
    const edited = prevData.map((data) => {
      data.answers.forEach((answer) => {
        if (answer.id === id) {
          answer.isHeld = true;
        }
      });

      return data;
    });
    return edited;
  });
};
