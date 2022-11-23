import styled from "styled-components";
import { Loader } from "../../utils/Atoms";
import { useFetch } from "../../utils/hooks";
import { Link } from "react-router-dom";

export const getListCount = (list) => list.length;

const Catchphrase = styled.p`
  text-align: center;
  padding: 2rem;
  margin: auto;
  width: 80%;
  font-size: 1.5rem;
  & p.emphasis {
    width: 100%;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    color: deeppink;
    text-shadow: 0 0 1rem deeppink;
    margin: 0.5rem 0;
    &.number {
      font-size: 10rem;
      font-weight: 900;
    }
  }
`;

const Home = () => {
  const { data, isLoading, error } = useFetch(
    "http://localhost:8000/freelances"
  );

  const { freelancersList } = data;

  return (
    <section>
      <h1>Home 🏡</h1>

      {isLoading && <Loader />}
      {error && <h2>😅 Une erreur est survenue 🤭</h2>}

      {!isLoading && !error && (
        <Link to="/freelances">
          <Catchphrase>
            <p className="emphasis number">{getListCount(freelancersList)}</p>{" "}
            freelances disponibles sur notre plateforme pour{" "}
            <p className="emphasis">votre projet !</p>
          </Catchphrase>
        </Link>
      )}
    </section>
  );
};

export default Home;
