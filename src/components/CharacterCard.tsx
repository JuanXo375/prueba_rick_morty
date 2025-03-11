import React from "react";
import Character from "../models/Character";
import { useDispatch } from "react-redux";
import { setCharacter } from "../store/filtersCharacterReducer";
import { useNavigate } from "react-router";

interface CharacterCardProps {
    character: Character;
  }

const CircleStatus = ({ status }: { status: Character["status"] }) => {
  const statusColors = {
    Alive: "bg-success",
    Dead: "bg-danger",
    unknown: "bg-secondary",
  };
  return (
    <span
      className={`position-absolute top-0 end-0 translate-middle rounded-circle ${statusColors[status]} text-center text-white`}
      style={{
        width: "20px",
        height: "20px",
        background: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(5px)",
      }}
    >
    </span>
  );
};

const CharacterCard:React.FC<CharacterCardProps> = ({ character }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleClick = () => {
    dispatch(setCharacter(character))
    navigate('/detail')
  }

  return (
    <div className="col">
      <div className="card animated-card" onClick={HandleClick}>
        <img src={character.image} className="card-img-top" alt={character.name} />
        <CircleStatus status={character.status} />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text"><strong>Species:</strong> {character.species}</p>
          <p className="card-text"><strong>Gender:</strong> {character.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;