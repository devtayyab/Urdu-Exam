import { Button, Card, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { data } from "../data/QuizData";
import { FetchData } from "../data/QuizData";
import { CheckOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Classget, Quizget } from "../store/action/blog";
import uniqueRandom from "unique-random";
const Classscreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [question, setquestion] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.classdata.reverse());
  console.log(state);
  useEffect(() => {
    dispatch(Classget());
  }, [dispatch]);
  const allQuestions = state;
  console.log("aaa", allQuestions);
  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex]["correct_option"];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      // Set Score
      setScore(score + 1);
    }
    // Show Next Button
    setShowNextButton(true);
  };
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true);
    } else {
      const random = uniqueRandom(1, state.length - 1);
      setCurrentQuestionIndex(currentQuestionIndex + 1);

      setquestion(random());
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 10000);
    return () => clearTimeout(timer);
  });
  //     Animated.timing(progress, {
  //         toValue: currentQuestionIndex+1,
  //         duration: 1000,
  //         useNativeDriver: false
  //     }).start();
  // }

  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    // Animated.timing(progress, {
    //     toValue: 0,
    //     duration: 1000,
    //     useNativeDriver: false
    // }).start();
  };

  const renderQuestion = () => {
    return (
      <div
        style={{
          marginVertical: 40,
        }}
      >
        {/* Question Counter */}
        <div
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              fontSize: 20,
              opacity: 0.6,
              marginRight: 2,
            }}
          >
            {currentQuestionIndex + 1}/ 10
          </p>
        </div>

        {/* Question */}
        <p
          style={{
            fontSize: 30,
          }}
        >
          {allQuestions[currentQuestionIndex]?.question}
        </p>
      </div>
    );
  };
  const renderOptions = () => {
    return (
      <div>
        {allQuestions[currentQuestionIndex]?.options.map((option) => (
          <div>
            <Button
              onClick={() => validateAnswer(option)}
              disabled={isOptionsDisabled}
              key={option}
              style={{
                borderWidth: 2,
                borderColor:
                  option == correctOption
                    ? "green"
                    : option == currentOptionSelected
                    ? "red"
                    : "",
                backgroundColor:
                  option == correctOption
                    ? "green"
                    : option == currentOptionSelected
                    ? "red"
                    : "",

                borderRadius: 20,
                width: "80%",
                alignItems: "center",
                height: 60,
                marginBottom: "10px",
              }}
            >
              <p style={{ fontSize: 20 }}>{option}</p>

              {/* Show Check Or Cross Icon based on correct answer*/}
              {option === correctOption ? (
                <div
                  style={{
                    borderRadius: 30 / 2,
                    backgroundColor: "green",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CheckOutlined
                    style={{
                      color: "white",
                      marginLeft: 40,
                    }}
                  ></CheckOutlined>
                </div>
              ) : option == currentOptionSelected ? (
                <div
                  style={{
                    borderRadius: 30 / 2,
                    backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CancelOutlinedIcon
                    style={{
                      color: "white",
                      marginLeft: 40,
                    }}
                  >
                    {" "}
                  </CancelOutlinedIcon>
                </div>
              ) : null}
            </Button>
            <br />
          </div>
        ))}
      </div>
    );
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <Button
          onClick={handleNext}
          style={{
            width: "80%",
            borderRadius: 20,
          }}
        >
          <p style={{ fontSize: 20, textAlign: "center" }}>Next</p>
        </Button>
      );
    } else {
      return null;
    }
  };

  // const [progress, setProgress] = useState(new Animated.Value(0));
  // const progressAnim = progress.interpolate({
  //     inputRange: [0, allQuestions.length],
  //     outputRange: ['0%','100%']
  // })
  // const renderProgressBar = () => {
  //     return (
  //         <div style={{
  //             width: '100%',
  //             height: 20,
  //             borderRadius: 20,
  //             backgroundColor: '#00000020',

  //         }}>
  //             <Animated.div style={[{
  //                 height: 20,
  //                 borderRadius: 20,
  //                 backgroundColor: COLORS.accent
  //             },{
  //                 width: progressAnim
  //             }]}>

  //             </Animated.div>

  //         </div>
  //     )
  // }

  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      {currentQuestionIndex < 10 ? (
        <>
          <h1>Live Class</h1>
          {/* ProgressBar */}
          {/* { renderProgressBar() } */}
          {/* Question */}
          {renderQuestion()}
          {/* Options */}
          {renderOptions()}
          {/* Next Button */}

          {/* {
            (limitedInterval = setInterval(() => {
              handleNext();

              if (currentQuestionIndex > 10) {
                clearInterval(limitedInterval);
                console.log("interval cleared!");
              }
            }, 30000))
          } */}
        </>
      ) : (
        <>
          <div
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                width: "80%",
                borderRadius: 20,
                padding: 20,
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: 30, fontWeight: "bold" }}>
                {score > allQuestions.length / 2 ? "Congratulations!" : "Oops!"}
              </p>

              <div
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 20,
                }}
              >
                <p
                  style={{
                    fontSize: 30,
                    color: score > allQuestions.length / 2 ? "green" : "red",
                  }}
                >
                  {score} / {allQuestions.length}
                </p>
              </div>
              {/* Retry Quiz button */}
              <Button
                onClick={restartQuiz}
                style={{
                  width: "80%",
                  borderRadius: 20,
                }}
              >
                <p
                  style={{
                    textAlign: "center",

                    fontSize: 20,
                  }}
                >
                  Retry Quiz
                </p>
              </Button>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Classscreen;
