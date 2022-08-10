import React from "react";
import { useQuery } from "@tanstack/react-query";
//import createFetchArticles from './Action'

const Heros = () => {
  const createFetchHeros = async () =>
    await (await fetch("http://localhost:4000/superHeros")).json();

  const { data, error, isError, isLoading } = useQuery(
    ["superHeros"],
    createFetchHeros
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  if (data) {
    return (
      <div>
        <ul>
          {data.map((Heros) => (
            <li key={Heros.id}>
              Heros:{Heros.name}
              {<li key={Heros.id}>AlterEgo: {Heros.alterEgo} </li>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
export default Heros;
