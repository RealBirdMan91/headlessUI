import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Navlayout() {
  return (
    <div className="overflow-hidden min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Navlayout;
