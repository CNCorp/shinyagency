import styled from "styled-components";
import defaultPicture from "../../assets/DSC08941.jpg";

const CardDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background-color: aquamarine;
  border-radius: 100%;
  margin: 1rem;
  & img {
    object-fit: cover;
    border-radius: 100%;
    width: 90%;
    height: 90%;
  }
  & span.title {
    position: absolute;
    bottom: 1rem;
    font-size: 0.8rem;
    font-weight: bold;
    text-align: center;
    color: white;
    text-shadow: 0 0 0.5rem #000000b7;
    white-space: nowrap;
  }
  & span.job {
    position: absolute;
    bottom: -0.3rem;
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0.2rem 0.5rem;
    background-color: aquamarine;
    color: white;
    text-shadow: 0 0 0.5rem #0000005b;
    border-radius: 1rem;
    white-space: nowrap;
  }
`;

const Card = ({ label, title, picture = defaultPicture }) => {
  return (
    <CardDiv>
      <span className="job">{label}</span>
      <img src={picture} alt="freelance" />
      <span className="title">{title}</span>
    </CardDiv>
  );
};

export default Card;
