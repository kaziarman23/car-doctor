import { Outlet } from "react-router";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto font-Inter">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
