import { Outlet } from "react-router";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="w-full font-Inter">
      <div className="max-w-6xl mx-auto">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
