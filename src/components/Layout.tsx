import { Stack } from "react-bootstrap";
import { Outlet } from 'react-router';
import Banner from "./Banner";
import React from "react";

const Layout:React.FC = () => {
  return (
    <Stack style={{minHeight: "100vh"}}>
      <Banner></Banner>
      <Outlet/>
    </Stack>
  )
}

export default Layout