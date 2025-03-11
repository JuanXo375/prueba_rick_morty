import { useParams } from 'react-router';
import BuscadorCharacter from '../components/BuscadorCharacter'
import QueryBodyPage from './QueryBodyPage'
import BuscadorAdaptable from '../components/BuscadorAdaptable';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

type SectionType = "character" | "location" | "episode";

const SearchPage = () => {
  const { idSection } = useParams<{ idSection: SectionType }>();
  const filtersEpisode = useSelector((state:RootState) => state.filtersEpisode.atributos?.id ?? 1)
  const filtersLocation = useSelector((state:RootState) => state.filtersLocation.atributos?.id ?? 1)

  return (
    <div>
      {idSection == "location" ? <BuscadorAdaptable maxId={126} value={filtersLocation}></BuscadorAdaptable> :
       idSection == "episode" ? <BuscadorAdaptable maxId={51} value={filtersEpisode}></BuscadorAdaptable> :
       <BuscadorCharacter></BuscadorCharacter>}
      <QueryBodyPage></QueryBodyPage>
    </div>
  )
}

export default SearchPage
