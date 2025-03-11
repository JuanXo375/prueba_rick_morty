import { useParams } from 'react-router';
import BuscadorCharacter from '../components/BuscadorCharacter'
import QueryBodyPage from './QueryBodyPage'
import BuscadorAdaptable from '../components/BuscadorAdaptable';

type SectionType = "character" | "location" | "episode";

const SearchPage = () => {
  const { idSection } = useParams<{ idSection: SectionType }>();
  return (
    <div>
      {idSection == "location" ? <BuscadorAdaptable maxId={126}></BuscadorAdaptable> :
       idSection == "episode" ? <BuscadorAdaptable maxId={51}></BuscadorAdaptable> :
       <BuscadorCharacter></BuscadorCharacter>}
      <QueryBodyPage></QueryBodyPage>
    </div>
  )
}

export default SearchPage
