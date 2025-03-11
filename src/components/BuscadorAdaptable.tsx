import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFiltersEpisode } from "../store/filtersEpisodeReducer";
import { setFiltersLocation } from "../store/filtersLocationReducer";

interface BuscadorEpisodeProps {
  maxId: number; // n - Máximo ID permitido
}

const BuscadorAdaptable: React.FC<BuscadorEpisodeProps> = ({ maxId }) => {
  const dispatch = useDispatch();
  const [filters, setLocalFilters] = useState<Partial<any>>({
    id: 1,
    name: "",
  });

  const handleSearch = () => {
    if(maxId == 51){
      dispatch(setFiltersEpisode(filters));
    }else{
      dispatch(setFiltersLocation(filters));
    }
  };

  return (
    <div className="container my-4 p-3 border rounded bg-light" style={{ width: "92svw" }}>
      <h4 className="mb-3">Buscar Personaje por {maxId <= 51 ? "episodio" : "locación"}</h4>
      <div className="row g-3">
        {/* Input de Nombre */}
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del personaje"
            value={filters.name}
            onChange={(e) => setLocalFilters({ ...filters, name: e.target.value })}
          />
        </div>

        {/* Selector de ID (1 - maxId) */}
        <div className="col-md-6">
          <select
            className="form-select"
            value={filters.id}
            onChange={(e) => setLocalFilters({ ...filters, id: Number(e.target.value) })}
          >
            {Array.from({ length: maxId }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {maxId <= 51 ? "Episodio" : "Locación"} {num}
              </option>
            ))}
          </select>
        </div>

        {/* Botón de Búsqueda */}
        <div className="col-md-12 text-center">
          <button className="btn btn-success" onClick={handleSearch}>
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuscadorAdaptable;
