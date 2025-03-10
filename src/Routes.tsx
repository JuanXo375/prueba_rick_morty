import { Route, Routes } from "react-router"
import CharactersList from "./page/CharactersList"
import Layout from "./components/Layout"


const MainRoutes = () => {
  return (
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route path="/:page?" element={<CharactersList />} />
      </Route>
    </Routes>
  )
}

export default MainRoutes