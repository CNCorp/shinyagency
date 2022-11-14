import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

import { Loader } from "../../utils/Atoms";
import { SurveyContext, ThemeContext } from "../../utils/context";
import { useFetch } from "../../utils/hooks";
import Results from "./results";

const StyledLink = styled(Link)`
  padding: 0.4rem 1rem;
  margin-left: 0.2rem;
  border: 2px solid aquamarine;
  border-radius: 1rem;
  text-decoration: none;
  color: aquamarine;
  transition: all 0.2s ease-in-out;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  &:hover {
    color: white;
    background-color: aquamarine;
  }
`;

const QWrapper = styled.div`
  margin-top: 2rem;
  background-color: #7fffd42c;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  box-shadow: 0 0 2rem 0.1rem #0000002c;
  & ul {
    list-style-type: none;
  }
  & h2 {
    margin: 0;
    font-size: 1rem;
    border: 2px solid aquamarine;
    border-radius: 1rem;
    width: fit-content;
    padding: 0.2rem 1rem;
    background-color: aquamarine;
    color: white;
  }
  & p {
    border-left: 2px solid aquamarine;
    padding-left: 1rem;
  }
  & div {
    margin: 1rem;
  }
  .resultsQuestion {
    font-size: 0.8rem;
    opacity: 0.4;
  }
`;

const ReplyBox = styled.button`
  border: none;
  height: 50px;
  max-width: 250px;
  width: 42vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${({ isSelected }) =>
    isSelected ? `0px 0px 0px 3px deeppink inset` : "none"};
`;

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 0;
  width: 100%;
  & a {
    &:first-child {
      margin-right: 15px;
    }
    &:last-of-type {
      margin-left: 15px;
    }
  }
`;

const Survey = () => {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const nextQuestionNumber = questionNumberInt + 1;
  const prevQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1;

  const { answers, saveAnswers } = useContext(SurveyContext);
  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`);
  const { surveyData } = data;

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer });
  }

  if (error) return <h1>😅 Something went wrong 🤭</h1>;

  return (
    <section>
      <h1>Survey 🧩</h1>
      {!isLoading && surveyData && (
        <div>
          <StyledLink
            to={questionNumber > 1 && `/survey/${prevQuestionNumber}`}
            isVisible={questionNumber > 1 && questionNumber !== "results"}
          >
            Previous
          </StyledLink>
          <StyledLink
            to={
              surveyData[questionNumberInt + 1]
                ? `/survey/${nextQuestionNumber}`
                : "/survey/results"
            }
            isVisible={questionNumber !== "results"}
          >
            {surveyData[questionNumberInt + 1] ? "Next" : "Results"}
          </StyledLink>
        </div>
      )}

      <QWrapper>
        <h2>{questionNumberInt ? `Question ${questionNumber}` : "Results"}</h2>
        {questionNumber !== "results" &&
          (isLoading ? <Loader /> : <p>{surveyData[questionNumberInt]}</p>)}
        {questionNumber === "results" && <Results answers={answers} />}
      </QWrapper>
      {questionNumberInt && surveyData ? (
        <ReplyWrapper>
          <Link
            to={
              surveyData[questionNumberInt + 1]
                ? `/survey/${nextQuestionNumber}`
                : "/survey/results"
            }
          >
            <ReplyBox
              onClick={() => saveReply(true)}
              isSelected={answers[questionNumber] === true}
            >
              👍
            </ReplyBox>
          </Link>
          <Link
            to={
              surveyData[questionNumberInt + 1]
                ? `/survey/${nextQuestionNumber}`
                : "/survey/results"
            }
          >
            <ReplyBox
              onClick={() => saveReply(false)}
              isSelected={answers[questionNumber] === false}
            >
              👎
            </ReplyBox>
          </Link>
        </ReplyWrapper>
      ) : null}
    </section>
  );
};

export default Survey;
