import { Button } from "@material-ui/core";
import { CheckOutlined } from "@material-ui/icons";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqueRandom from "unique-random";
import Loader from "react-loader-spinner";
import img1 from "../images/quizback.jpg";
import { Classget } from "../store/action/blog";
const Classscreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [loading, setloading] = useState(true);
  const [question, setquestion] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.classdata);
 
  useEffect(() => {
    dispatch(Classget());
    setloading(false);
  }, [dispatch]);
  const allQuestions = state;
  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[question]["correct_option"];
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
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // width: "80%"
        }}
      >
        {/* Question Counter */}
        <div
          style={{
            // flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              fontSize: 20,
              opacity: 0.6,
              marginRight: 2,
              fontFamily: "Noto Nastaliq Urdu",
            }}
          >
            {currentQuestionIndex + 1}/ 100
          </p>
        </div>

        {/* Question */}
        <p
          style={{
            fontSize: 30,
            border: "2px solid #3b5998",
            width: "80%",
            borderRadius: "20px",

            fontFamily: "Noto Nastaliq Urdu",
            justifyContent: "center",
          }}
        >
          {allQuestions[question]?.question}
        </p>
      </div>
    );
  };
  const renderOptions = () => {
    return (
      <div>
        {allQuestions[question]?.options.map((option) => (
          <div>
            <Button
              onClick={() => validateAnswer(option)}
              disabled={isOptionsDisabled}
              key={option}
              style={{
                border: "2px solid #3b5998",
                // width: "80%",

                justifyContent: "center",
                borderWidth: "1px",
                borderColor:
                  option == correctOption
                    ? "lightgreen"
                    : option == currentOptionSelected
                      ? "#AA1115"
                      : "",
                backgroundColor:
                  option == correctOption
                    ? "lightgreen"
                    : option == currentOptionSelected
                      ? "#AA1115"
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
                    backgroundColor: "lihtgreen",
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
                    backgroundColor: "#AA1115",
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
  useEffect(() => {
    const timer = setTimeout(() => {handleNext()}, 10000);
    return () => clearTimeout(timer);
  }, [handleNext]);
  // const renderNextButton = () => {
  //   if (showNextButton) {
  //     return (
  //       <Button
  //         onClick={handleNext}
  //         style={{
  //           width: "80%",
  //           borderRadius: 20,
  //         }}
  //       >
  //         <p style={{ fontSize: 20, textAlign: "center" }}>Next</p>
  //       </Button>
  //     );
  //   } else {
  //     return null;
  //   }
  // };

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
        // backgroundImage: `url(${img1})`,
        // // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
      }}
    >
      {currentQuestionIndex < 100 ? (
        <div
          style={{
            backgroundImage: `url(${img1})`,
            // backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1
            style={{
              fontFamily: "Noto Nastaliq Urdu",
            }}
          >
            سوالات
          </h1>
          {loading ? (
            <Loader
              type="Bars"
              color="Blue"
              height={100}
              width={100}
              timeout={5000} //3 secs
            />
          ) : (
            <>
              {renderQuestion()}
              {/* Options */}
              {renderOptions()}
              {/* Next Button */}
              {/* {renderNextButton()} */}
            </>
          )}
        </div>
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
                {score > 100 / 2 ? "Congratulations!" : "Oops!"}
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
                  {score} / 100
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
