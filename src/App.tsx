import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Setting from "./pages/Setting";
// import Login from "./pages/login";
import Account from "./pages/Account";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./ui/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="booking" element={<Booking />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Setting />} />
          <Route path="account" element={<Account />} />
        </Route>
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
