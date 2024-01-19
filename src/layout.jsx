import Navbar from "./component/navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <main>
      <Navbar />
      <div className=" mt-20">
      <Outlet />
</div>
    </main>
  );
}