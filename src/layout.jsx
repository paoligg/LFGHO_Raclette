import Navbar from "./component/navbar";
import Footer from "./component/footer";
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