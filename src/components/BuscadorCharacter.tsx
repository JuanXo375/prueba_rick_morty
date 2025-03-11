import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFiltersCharacter } from "../store/filtersCharacterReducer";
import Character from "../models/Character";

const BuscadorCharacter: React.FC = () => {
  const dispatch = useDispatch();
  const [filters, setLocalFilters] = useState<Partial<Character>>({
    name: "",
    status: undefined,
    species: "",
    type: "",
    gender: undefined,
  });

  const handleSearch = () => {
    dispatch(setFiltersCharacter(filters));
  };

  return (
    <div className="container my-4 p-3 border rounded bg-light" style={{ width: "92svw" }}>
      <h4 className="mb-3">Buscar Personaje</h4>
      <div className="row g-3">
        {/* Input de Nombre */}
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del personaje"
            value={filters.name}
            onChange={(e) => setLocalFilters({ ...filters, name: e.target.value })}
          />
        </div>

        {/* Selector de Estado */}
        <div className="col-md-4">
          <select
            className="form-select"
            value={filters.status}
            onChange={(e) => setLocalFilters({ ...filters, status: e.target.value as "Alive" | "Dead" | "unknown" | undefined })}
          >
            <option value="">Estado</option>
            <option value="Alive">Vivo</option>
            <option value="Dead">Muerto</option>
            <option value="Unknown">Desconocido</option>
          </select>
        </div>

        {/* Selector de Género */}
        <div className="col-md-4">
          <select
            className="form-select"
            value={filters.gender}
            onChange={(e) => setLocalFilters({ ...filters, gender: e.target.value as "unknown" | "Female" | "Male" | "Genderless" | undefined })}
          >
            <option value="">Género</option>
            <option value="female">Femenino</option>
            <option value="male">Masculino</option>
            <option value="genderless">Sin género</option>
            <option value="unknown">Desconocido</option>
          </select>
        </div>

        {/* Input de Especie */}
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Especie"
            value={filters.species}
            onChange={(e) => setLocalFilters({ ...filters, species: e.target.value })}
          />
        </div>

        {/* Input de Tipo */}
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Tipo"
            value={filters.type}
            onChange={(e) => setLocalFilters({ ...filters, type: e.target.value })}
          />
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

export default BuscadorCharacter;
