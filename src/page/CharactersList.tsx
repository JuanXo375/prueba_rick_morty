import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CharacterResponse } from "../models/Character";
import { useParams } from "react-router";
import { fetchCharacters } from "../services/queries";
import CardList from "../components/CardList";
import PaginationNavigation from "../components/PaginationNavigation";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../store/filtersCharacterReducer";

interface RootState {
  filters: {
    name: string;
    location: string;
    episode: string;
    page: number;
  };
}

const CharactersList: React.FC = () => {
  const filters = useSelector((state:RootState) => state.filters);
  const dispatch = useDispatch();
  const { page } = useParams<{ page: string }>();
  const currentPage = parseInt(page ?? '') || 1;
  const [state, setState] = useState<{ loading: boolean; error: any; data: CharacterResponse|null }>
  ({ loading: true, error: null, data: null });

  const fetchData = async () => {
    setState({ loading: true, error: null, data: null });
    try {
      const data:CharacterResponse = await fetchCharacters(filters);
      setState({ loading: false, error: null, data });
    } catch (error) {
      setState({ loading: false, error, data: null });
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [filters])
  
  useEffect(() => {
    const filters_copy = { ...filters, page: currentPage };
    dispatch(setFilters(filters_copy));    
  }, [currentPage])

  if (state.loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <>
      <CardList state={state}/>
      <PaginationNavigation state={state} currentPage={currentPage}/>
    </>
  );
};

export default CharactersList;