import { useEffect, useState } from "react";
import { quiz } from "../../../Data/spanishquestions"; // Importing the quiz data
import styles from "../../../styles/quiz/quiz.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsAlarm } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import Head from "next/head";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // For toggling icons
import { useSelector } from 'react-redux'; // To access authentication status from Redux

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [time, setTime] = useState(30);
  const [start, setStart] = useState(true);
  const [result, setResult] = useState({ correctAnswers: 0, wrong: 0 });
  const [isMember, setIsMember] = useState(false); // Variable for membership
  const [showMenu, setShowMenu] = useState(false); // Toggle state for sidebar on mobile
  const { isAuthenticated } = useSelector((state) => state.auth); // Access authentication status
  

  const router = useRouter();
  const { id } = router.query; // Get the dynamic route parameter

  const quizId = id ? parseInt(id) : 0;
  const selectedQuiz = quiz[quizId - 1] ? quiz[quizId - 1] : quiz[0]; // Default to first quiz if id is invalid

  const questions = selectedQuiz.questions;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const reloadPage = () => {
    router.reload();
  };

  const onClickNext = () => {
    setTime(30);
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? { ...prev, correctAnswers: prev.correctAnswers + 1 }
        : { ...prev, correctAnswers: prev.correctAnswers, wrong: prev.wrong + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setSelectedAnswer("");
      setStart(true);
    } else {
      setShowResult(true);
      setActiveQuestion(0);
      setTime(0);
      setSelectedOption(null);
      setSelectedAnswer("");
    }
  };

  const onAnswerSelected = (answer, index) => {
    setTime(-1);
    setSelectedAnswerIndex(index);
    setSelectedAnswer(answer === correctAnswer);
  };

  useEffect(() => {
    if (time === 0) {
      onClickNext();
    }
    if (showResult) {
      setTime(-1);
    }
    const interval = time > 0 && setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(interval);
  }, [time]);

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Head>
        <title>Spanish Quiz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main className={styles.mainLayout}>
        {/* Sidebar/Menu for larger screens */}
        <div className={`${styles.sidebar} ${styles.desktopSidebar}`}>
          <ul>
            {quiz.map((qz, index) => (
              <li key={index} className={!isAuthenticated && index > 1 ? styles.disabledLink : ""}>
                <Link href={`/QuizTime/SpanishQuiz/${index + 1}`}>
                  {qz.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Toggleable menu for smaller screens */}
        <div className={`${styles.mobileMenu} ${styles.sidebar}`}>
          <div className={styles.menuHeader} onClick={toggleMenu}>
            <span>{selectedQuiz.name}</span>
            {showMenu ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          {showMenu && (
            <ul className={styles.menuList}>
              {quiz.map((qz, index) => (
                <li key={index} onClick={toggleMenu}>
                  <Link href={`/QuizTime/SpanishQuiz/${index + 1}`}>
                    {qz.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Quiz Container */}
        <div className={styles.container}>
          <div className={styles.timer}>
            <BsAlarm /> <span>{addLeadingZero(time)}</span>
          </div>

          <div className={styles.quizcontainer}>
            {!showResult ? (
              <div>
                <div className={styles.flex5}>
                  <div>
                    <span className={styles.activequestionno}>
                      {addLeadingZero(activeQuestion + 1)}
                    </span>
                    <span className={styles.totalquestion}>
                      /{addLeadingZero(questions.length)}
                    </span>
                  </div>
                  <div className={styles.scores}>
                    <div className={styles.checkcont}>
                      <FaCheck className={styles.check} />:
                      <div> {result.correctAnswers}</div>
                    </div>
                    <div className={styles.checkcont}>
                      <RxCross1 className={styles.cross} />:
                      <div> {result.wrong}</div>
                    </div>
                  </div>
                </div>
                <h2 className={styles.ques}>{question}</h2>
                <ul>
                  {choices.map((choice, index) => (
                    <li
                      key={index}
                      onClick={() => [
                        onAnswerSelected(index + 1, index),
                        setSelectedOption(index + 1),
                        setStart(false),
                      ]}
                      className={
                        start
                          ? `${styles.start}`
                          : correctAnswer === index + 1
                          ? `${styles.correct}`
                          : selectedOption !== index + 1
                          ? `${styles.notselected}`
                          : selectedAnswer
                          ? `${styles.correct}`
                          : `${styles.wrong}`
                      }
                    >
                      {choice}
                    </li>
                  ))}
                </ul>
                <div className={styles.flexright}>
                  <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                    {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.result}>
                <h1 className={styles.headingresult}>Result</h1>
                <div className={styles.flexi}>
                  <div>Total Questions:</div>
                  <div className={styles.color}>{questions.length}</div>
                </div>
                <div className={styles.flexi}>
                  <div>Total Score:</div>
                  <div className={styles.color}>{result.correctAnswers * 5}</div>
                </div>
                <div className={styles.flexi}>
                  <div>Correct Answers:</div>
                  <div className={styles.color}>{result.correctAnswers}</div>
                </div>
                <div className={styles.flexi}>
                  <div>Wrong Answers:</div>
                  <div className={styles.color}>
                    {questions.length - result.correctAnswers}
                  </div>
                </div>
                <div className={styles.flex}>
                  <Link className={styles.btns} href="/QuizTime">
                    Go Back
                  </Link>
                  <div className={styles.btns} onClick={reloadPage}>
                    Retry
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Quiz;