import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router";
import { callAPI } from "../services/queries";
import CardList from "../components/CardList";
import PaginationNavigation from "../components/PaginationNavigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

type SectionType = "character" | "location" | "episode";

interface State<T> {
  loading: boolean;
  error: any;
  data: T[] | null;
  info: any | null;
}

const QueryBodyPage: React.FC = () => {
  const { idSection, page } = useParams<{ page: string; idSection: SectionType }>();
  const currentPage = parseInt(page ?? "1") || 1;
  const dispatch = useDispatch();

  // Obtener el cache correcto según la sección
  const cache = useSelector((state: RootState) => {
    switch (idSection) {
      case "location":
        return state.filtersLocation.cachedCharacter;
      case "episode":
        return state.filtersEpisode.cachedCharacter;
      default:
        return state.filtersCharacter.cachedCharacter;
    }
  });

  // Obtener el filtro correcto según la sección
  const filters = useSelector((state: RootState) => {
    switch (idSection) {
      case "location":
        return state.filtersLocation.atributos;
      case "episode":
        return state.filtersEpisode.atributos;
      default:
        return state.filtersCharacter.atributos;
    }
  });

  // Estado inicial tipado
  const [state, setState] = useState<State<any>>({
    loading: true,
    error: null,
    data: null,
    info: null,
  });

  const fetchData = async () => {
    if(cache == null){
      setState((prev) => ({ ...prev, loading: true }));
      try {
        const response = await callAPI(idSection ?? "character", currentPage, filters,dispatch);
        console.log("🚀 ~ fetchData ~ response:", response)
        setState({ loading: false, error: null, data: response?.data ?? null, info: response?.additionalInformation ?? null });
      } catch (error) {
        console.error("🚀 ~ fetchData ~ error:", error)
        setState({ loading: false, error, data: null, info: null });
      }
    }else{
      setState({ loading: false, error: null, data: cache ?? null, info: null });
    }
  };

  // Ejecuta `fetchData` cuando cambian los filtros o la sección
  useEffect(() => {
    fetchData();
  }, [filters, idSection, currentPage]);

  if (state.loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <>
      <CardList state={state} />
      <PaginationNavigation state={state?.info} currentPage={currentPage} />
    </>
  );
};

export default QueryBodyPage;
