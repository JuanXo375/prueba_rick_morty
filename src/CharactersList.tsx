import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CharacterCard from "./components/CharacterCard";
import Character, { CharacterResponse } from "./models/Character";
import { useParams } from "react-router";
import { fetchCharacters } from "./services/queries";

const CharactersList: React.FC = () => {
  const { page } = useParams<{ page: string }>();
  const currentPage = parseInt(page ?? '') || 1;
  const filters = { page: currentPage };
  const [state, setState] = useState<{ loading: boolean; error: any; data: CharacterResponse|null }>({ loading: true, error: null, data: null });

  const fetchData = async () => {
    setState({ loading: true, error: null, data: null });
    try {
      const data:CharacterResponse = await fetchCharacters(filters);
      setState({ loading: false, error: null, data });
    } catch (error) {
      setState({ loading: false, error, data: null });
    }
  }

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  if (state.loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
        {state.data && state.data.results.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <div className="d-flex justify-content-between mt-4 mb-4">
        <Link className={`btn btn-primary ${currentPage === 1 ? "disabled" : ""}`} to={`/${currentPage - 1}`}>
          Previous
        </Link>
        <Link className={`btn btn-primary ${state.data?.info?.next ? "":"disabled"}`} to={`/${currentPage + 1}`}>
          Next
        </Link>
      </div>
    </div>
  );
};

export default CharactersList;