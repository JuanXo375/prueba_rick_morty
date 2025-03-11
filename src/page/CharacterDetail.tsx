import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { setFiltersEpisode } from "../store/filtersEpisodeReducer";

const CharacterDetail: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedCharacter = useSelector((state: RootState) => state.filtersCharacter.selectedCharacter);
  const [character, setCharacter] = useState<any>(selectedCharacter);

  const HandleClick = (index:string|undefined) => {
    dispatch(setFiltersEpisode({id: Number(index ?? 0)}))
    navigate('/episode/1')
  }

  return (
    <div className="container mt-5">
      <Button onClick={() => navigate(-1)}>Volver</Button>
      <div className="card shadow-lg">
        <div className="row g-0">
          {/* Imagen del personaje */}
          <div className="col-md-4">
            <img src={character.image} className="img-fluid rounded-start" alt={character.name} />
          </div>

          {/* Información del personaje */}
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title fw-bold">{character.name}</h2>
              <p className={`badge ${character.status === "Alive" ? "bg-success" : character.status === "Dead" ? "bg-danger" : "bg-secondary"}`}>
                {character.status}
              </p>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item"><strong>Especie:</strong> {character.species}</li>
                {character.type && <li className="list-group-item"><strong>Tipo:</strong> {character.type}</li>}
                <li className="list-group-item"><strong>Género:</strong> {character.gender}</li>
                <li className="list-group-item"><strong>Ubicación:</strong> {character.location?.name}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de episodios */}
      <div className="mt-4">
        <h4>Episodios en los que aparece:</h4>
        <ul className="list-group">
          {character.episode.map((episodeUrl: string, index: number) => (
            <li key={index} className="list-group-item effect-hover" onClick={() => HandleClick(episodeUrl.split("/").pop())}>
              Episodio {episodeUrl.split("/").pop()} - <a>{episodeUrl}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetail;
