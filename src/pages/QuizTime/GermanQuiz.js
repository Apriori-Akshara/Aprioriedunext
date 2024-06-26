import { useEffect, useState } from "react";
import { quiz } from "../../Data/germanquestions";
import styles from "../../styles/quiz/quiz.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsAlarm } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import Head from "next/head";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [selectedoption, setSelectedoption] = useState(null)
  const [time, setTime] = useState(30)
  const [start, setStart] = useState(true)
  const [result, setResult] = useState({correctAnswers: 0,wrong: 0});
  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const router = useRouter();

    const reloadPage = () => {
    router.reload();
  };

    const onClickNext = () => {
    setTime(30)
    setSelectedAnswerIndex(null);
    setResult((prev) => selectedAnswer ? {...prev, correctAnswers: prev.correctAnswers + 1} : { ...prev, correctAnswers: prev.correctAnswers, wrong: prev.wrong + 1 });
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      setSelectedoption(null)
      setSelectedAnswer("")
      setStart(true)
    } else {
      setShowResult(true)
      setActiveQuestion(0);
      setTime(0)
      setSelectedoption(null)
      setSelectedAnswer("")
    }
  };

    const onAnswerSelected = (answer, index) => {
      setTime(-1)
      setSelectedAnswerIndex(index);
      if (answer !== correctAnswer) {
        setSelectedAnswer(false);
      } else {
        setSelectedAnswer(true);
      }
  };

  useEffect(() => {
    if(time === 0){
      onClickNext()
    }
    if(showResult){
      setTime(-1)
    }
    const interval = time > 0 && setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(interval);
  },[time]);

  console.log(selectedoption, correctAnswer, selectedAnswerIndex)

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <>
    <Head>
      <title>German Quiz</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo/newlogo1.png" />
    </Head>
    <main>
    <div className={styles.container}>
    {time >= 0 && <div className={styles.timer}><BsAlarm /> <span>{time}</span></div>}
    <div className={styles.background2}></div>
    <Image className={styles.background} src={'/languageclub/background (1).jpg'} width={2000} height={2000} alt=''></Image>
      <div className={styles.quizcontainer}>
        {!showResult ? (
          <div>
          <div className={styles.flex5}>
            <div>
              <span className={styles.activequestionno}>{addLeadingZero(activeQuestion + 1)}</span>
              <span className={styles.totalquestion}>/{addLeadingZero(questions.length)}</span>
            </div>
            {!showResult ? (<div className={styles.scores}>
                        <div className={styles.checkcont}><FaCheck className={styles.check}/>:<div> {result.correctAnswers}</div></div>
                        <div className={styles.checkcont}><RxCross1 className={styles.cross}/>:<div> {result.wrong}</div></div>
                      </div>):''}
          </div>
            <h2 className={styles.ques}>{question}</h2>
            <ul>
                <li onClick = {() => [onAnswerSelected(1, 1), setSelectedoption(1), setStart(false)]} disabled={selectedAnswer ? false : true} key={choices[0]} 
                className={start ? `${styles.start}` : 
                correctAnswer === 1 ? `${styles.correct}` :
                  selectedoption !== 1 ? `${styles.notselected}` 
                : selectedAnswer ? `${styles.correct}` : `${styles.wrong}`} >{choices[0]}</li>
                <li onClick = {() => [onAnswerSelected(2, 2), setSelectedoption(2), setStart(false)]} disabled={selectedAnswer ? false : true} key={choices[1]} 
                className={start ? `${styles.start}` : 
                correctAnswer === 2 ? `${styles.correct}` :
                  selectedoption !== 2 ? `${styles.notselected}` : 
                selectedAnswer ? `${styles.correct}` : `${styles.wrong}`}>{choices[1]}</li>
                <li onClick = {() => [onAnswerSelected(3, 3), setSelectedoption(3), setStart(false)]} disabled={selectedAnswer ? false : true} key={choices[2]} 
                className={start ? `${styles.start}` : 
                correctAnswer === 3 ? `${styles.correct}` :
                  selectedoption !== 3 ? `${styles.notselected}` : 
                selectedAnswer ? `${styles.correct}` : `${styles.wrong}`} >{choices[2]}</li>
                <li onClick = {() => [onAnswerSelected(4, 4), setSelectedoption(4), setStart(false)]} disabled={selectedAnswer ? false : true} key={choices[3]} 
                className={start ? `${styles.start}` : 
                correctAnswer === 4 ? `${styles.correct}` :
                selectedoption !== 4 ? `${styles.notselected}` : 
                selectedAnswer ? `${styles.correct}` : `${styles.wrong}`} >{choices[3]}</li>
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
            <p className={styles.flexi}><div>Total Question:</div><div className={styles.color}>{questions.length}</div></p>
            <p className={styles.flexi}><div>Total Score:</div><div className={styles.color}>{result.correctAnswers * 5}</div></p>
            <p className={styles.flexi}><div>Correct Answers:</div><div className={styles.color}>{result.correctAnswers}</div></p>
            <p className={styles.flexi}><div>Wrong Answers:</div><div className={styles.color}>{10 - result.correctAnswers}</div></p>
            <div className={styles.flex}> 
              <Link className={styles.btns} href="/QuizTime">Go Back</Link>
                <div className={styles.btns} onClick={reloadPage}>Retry</div>
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
