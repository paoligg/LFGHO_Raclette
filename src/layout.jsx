import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <main>
      <Navbar />
      <div className=" mt-32">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}