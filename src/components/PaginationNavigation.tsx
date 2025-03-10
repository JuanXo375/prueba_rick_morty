import { Link } from 'react-router'
import { CharacterResponse } from '../models/Character';

interface Props {
  state: { loading: boolean; error: any; data: CharacterResponse|null };
  currentPage: number;
}


const PaginationNavigation = ({state,currentPage}: Props) => {
  return (
    <div className="d-flex justify-content-between mt-4 mb-4" style={{margin:'0 1.5rem'}}>
      <Link className={`btn btn-primary ${currentPage === 1 ? "disabled" : ""}`} to={`/${currentPage - 1}`}>
        Previous
      </Link>
      <Link className={`btn btn-primary ${state.data?.info?.next ? "":"disabled"}`} to={`/${currentPage + 1}`}>
        Next
      </Link>
    </div>
  )
}

export default PaginationNavigation