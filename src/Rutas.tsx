import { Navigate, Route, Routes } from "react-router"
import Layout from "./components/Layout"
import SearchPage from "./page/SearchPage"


const MainRoutes = () => {
  return (
    <Routes >
      <Route path="/" element={<Layout/>}>
        <Route path=":idSection/:page?" element={<SearchPage/>} />
        <Route path="/" element={<Navigate to={'/character/1'}/>}/>
      </Route>
    </Routes>
  )
}

export default MainRoutes