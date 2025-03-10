import { Stack } from "react-bootstrap";
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <Stack style={{minHeight: "100vh"}}>
      <div>
        <h1 className="text-center mb-4">Rick and Morty Characters</h1>
      </div>
      <Outlet/>
    </Stack>
  )
}

export default Layout