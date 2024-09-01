import About from "./About";
import Banner from "./Banner";
import Location from "./Location";
import Products from "./Products";
import Services from "./Services";
import Team from "./Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Location />
      <Products />
      <Team />
    </div>
  );
};

export default Home;
