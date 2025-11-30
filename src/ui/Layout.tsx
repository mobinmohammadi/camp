import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="grid grid-cols-[18rem_1fr]  grid-rows-[auto_1fr] h-screen ">

      <Sidebar />
      <Header />
      
      <main className="pt-2 container-custom">
        <Outlet />
      </main>
    </div>
  );
}
