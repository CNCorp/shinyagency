import { useEffect, useState } from "react";
import { Loader } from "../../utils/Atoms";
import Card from "./card";
import styled from "styled-components";

const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  column-gap: 1rem;
`;

const Freelances = () => {
  const [freelances, setFreelances] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    async function fetchFreelances() {
      setDataLoading(true);
      try {
        const res = await fetch(`http://localhost:8000/freelances`);
        const { freelancersList } = await res.json();
        setFreelances(freelancersList);
      } catch (err) {
        console.log(err);
        alert(err);
      } finally {
        setDataLoading(false);
      }
    }
    fetchFreelances();
  }, []);

  return (
    <section>
      <h1>Freelances 🧑‍💻</h1>
      <DataContainer>
        {isDataLoading ? (
          <Loader />
        ) : (
          freelances.map((profile, index) => (
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
