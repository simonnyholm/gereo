import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <main className="">
        <Outlet />
      </main>
      <Nav/>
    </div>
  );
};

export default Layout;
