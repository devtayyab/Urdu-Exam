import React, { useState } from "react";

import { COLORS, SIZES } from "../constants";
import { data } from "../data/QuizData";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Quizscreen = () => {
  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

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
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
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
                color: COLORS.white,
                fontSize: 20,
                opacity: 0.6,
                marginRight: 2,
              }}
            >
              {currentQuestionIndex + 1}
            </p>
            <p style={{ color: COLORS.white, fontSize: 18, opacity: 0.6 }}>
              / {allQuestions.length}
            </p>
          </div>

          {/* Question */}
          <p
            style={{
              color: COLORS.white,
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
            <button
              onClick={() => validateAnswer(option)}
              disabled={isOptionsDisabled}
              key={option}
              style={{
                borderWidth: 3,
                borderColor:
                  option == correctOption
                    ? COLORS.success
                    : option == currentOptionSelected
                    ? COLORS.error
                    : COLORS.secondary + "40",
                backgroundColor:
                  option == correctOption
                    ? COLORS.success + "20"
                    : option == currentOptionSelected
                    ? COLORS.error + "20"
                    : COLORS.secondary + "20",
                height: 60,
                borderRadius: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                marginVertical: 10,
              }}
            >
              <p style={{ fontSize: 20, color: COLORS.white }}>{option}</p>

              {/* Show Check Or Cross Icon based on correct answer*/}
              {option == correctOption ? (
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    backgroundColor: COLORS.success,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <MaterialCommunityIcons
                    name="check"
                    style={{
                      color: COLORS.white,
                      fontSize: 20,
                    }}
                  /> */}
                </div>
              ) : option == currentOptionSelected ? (
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    backgroundColor: COLORS.error,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <MaterialCommunityIcons
                    name="close"
                    style={{
                      color: COLORS.white,
                      fontSize: 20,
                    }}
                  /> */}
                </div>
              ) : null}
            </button>
          ))}
        </div>
      );
    };
    const renderNextButton = () => {
      if (showNextButton) {
        return (
          <button
            onClick={handleNext}
            style={{
              marginTop: 20,
              width: "100%",
              backgroundColor: COLORS.accent,
              padding: 20,
              borderRadius: 5,
            }}
          >
            <p
              style={{ fontSize: 20, color: COLORS.white, textAlign: "center" }}
            >
              Next
            </p>
          </button>
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
      //    <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <div
        style={{
          flex: 1,
          paddingVertical: 10,
          paddingHorizontal: 16,
          backgroundColor: "#00a46c",
          position: "relative",
        }}
      >
          <h1>Quiz</h1>
        {/* ProgressBar */}
        {/* { renderProgressBar() } */}

        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOptions()}

        {/* Next Button */}
        {renderNextButton()}

        {/* Score Modal */}
        {/* <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               > */}
        <div
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: COLORS.white,
              width: "90%",
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
                justifyContent: "flex-start",
                alignItems: "center",
                marginVertical: 20,
              }}
            >
              <p
                style={{
                  fontSize: 30,
                  color:
                    score > allQuestions.length / 2
                      ? COLORS.success
                      : COLORS.error,
                }}
              >
                {score}
              </p>
              <p
                style={{
                  fontSize: 20,
                  color: COLORS.black,
                }}
              >
                / {allQuestions.length}
              </p>
            </div>
            {/* Retry Quiz button */}
            <button
              onClick={restartQuiz}
              style={{
                backgroundColor: COLORS.accent,
                padding: 20,
                width: "100%",
                borderRadius: 20,
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  color: COLORS.white,
                  fontSize: 20,
                }}
              >
                Retry Quiz
              </p>
            </button>
          </div>
        </div>
        {/* </Modal> */}

        {/* Background img */}
        {/* <img
                source={require)}
                style={{
                    width: SIZES.width,
                    height: 130,
                    zIndex: -1,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    opacity: 0.5
                }}
                resizeMode={'contain'}
                /> */}
      </div>
    );
  };
};

export default Quizscreen;
