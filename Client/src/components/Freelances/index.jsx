import { Loader } from "../../utils/Atoms";
import Card from "./card";
import styled from "styled-components";
import { useFetch } from "../../utils/hooks";

const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  column-gap: 1rem;
`;

const Freelances = () => {
  const { data, isLoading, error } = useFetch(
    "http://localhost:8000/freelances"
  );

  const { freelancersList } = data;

  if (error) return <h3>🤭 Oops something went wrong 😅</h3>;

  return (
    <section>
      <h1>Freelances 🧑‍💻</h1>
      <DataContainer>
        {isLoading ? (
          <Loader />
        ) : (
          freelancersList.map((profile, index) => (
            <Card
              key={index}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))
        )}
      </DataContainer>
    </section>
  );
};

export default Freelances;
