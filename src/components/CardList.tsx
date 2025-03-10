import Character, { CharacterResponse } from '../models/Character';
import CharacterCard from './CharacterCard';

interface Props {
  state: { loading: boolean; error: any; data: CharacterResponse|null };
}

const CardList = ({state}: Props) => {
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
        {state.data && state.data.results.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
        {!state.data && <p>No se encontraron personajes.</p>}
      </div>
    </div>
  )
}

export default CardList