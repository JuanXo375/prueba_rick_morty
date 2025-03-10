import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/filtersCharacterReducer';

const Buscador: React.FC = () => {
  const dispatch = useDispatch();
  const [filters, setLocalFilters] = useState({ name: '', location: '', episode: '' });
  
  const handleSearch = () => {
    dispatch(setFilters(filters));
  };

  return (
    <div className="container my-4 p-3 border rounded bg-light" style={{width: "92svw"}}>
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

        {/* Selector de Ubicación */}
        <div className="col-md-4">
          <select
            className="form-select"
            value={filters.location}
            onChange={(e) => setLocalFilters({ ...filters, location: e.target.value })}
          >
            <option value="">Selecciona una ubicación</option>
            {Array.from({ length: 126 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                Ubicación {num}
              </option>
            ))}
          </select>
        </div>

        {/* Selector de Episodio */}
        <div className="col-md-4">
          <select
            className="form-select"
            value={filters.episode}
            onChange={(e) => setLocalFilters({ ...filters, episode: e.target.value })}
          >
            <option value="">Selecciona un episodio</option>
            {Array.from({ length: 51 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                Episodio {num}
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

export default Buscador;