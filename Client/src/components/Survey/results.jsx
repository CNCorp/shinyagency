import { useContext } from "react";
import styled from "styled-components";
import { Loader } from "../../utils/Atoms";
import { SurveyContext } from "../../utils/context";
import { useFetch } from "../../utils/hooks";

const CompTitle = styled.span`
  font-size: inherit;
  font-weight: 600;
  color: deeppink;
  text-transform: capitalize;
`;

const ResultTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: capitalize;
  margin: 2rem auto;
`;

const formatQueryParams = (a) => {
  const answerNumbers = Object.keys(a);
  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstAnswer = index === 0;
    const separator = isFirstAnswer ? "" : "&";
    return `${previousParams}${separator}a${answerNumber}=${a[answerNumber]}`;
  }, "");
};

export default function Results() {
  const { answers } = useContext(SurveyContext);
  const queryParams = formatQueryParams(answers);

  const { isLoading, data, error } = useFetch(
    `http://localhost:8000/results?${queryParams}`
  );

  const { resultsData } = data;

  if (isLoading) return <Loader />;
  if (error) return <h3>😅 Une erreur est survenue 🤭</h3>;

  return (
    data && (
      <>
        <ResultTitle>
          Les compétences dont vous avez besoin :{" "}
          {resultsData.map((comp) => (
            <CompTitle>{comp.title} &nbsp;</CompTitle>
          ))}{" "}
        </ResultTitle>
        <div>
          {resultsData.map((comp) => (
            <p>
              <CompTitle>{comp.title}</CompTitle> : &nbsp;
              {comp.description}
            </p>
          ))}
        </div>
      </>
    )
  );
}
