import { Link, useLocation } from 'react-router';

interface Props {
  state: any|null;
  currentPage: number;
}

const PaginationNavigation = ({ state, currentPage }: Props) => {
  const location = useLocation(); // Obtiene la ruta actual
  const basePath = location.pathname.split("/")[1]; // Extrae 'character', 'location' o 'episode'

  return (
    <div className="d-flex justify-content-between mt-4 mb-4" style={{ margin: "0 7rem" }}>
      {/* Botón Anterior */}
      <Link
        className={`btn btn-primary ${currentPage === 1 ? "disabled" : ""}`}
        to={`/${basePath}/${currentPage - 1}`}
      >
        Previous
      </Link>

      {/* Botón Siguiente */}
      <Link
        className={`btn btn-primary ${state?.next ? "" : "disabled"}`}
        to={`/${basePath}/${currentPage + 1}`}
      >
        Next
      </Link>
    </div>
  );
};

export default PaginationNavigation;
