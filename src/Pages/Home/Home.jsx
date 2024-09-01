import About from "./About";
import Banner from "./Banner";
import CoreFeatures from "./CoreFeatures";
import Location from "./Location";
import Products from "./Products";
import Services from "./Services";
import Team from "./Team";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Location />
      <Products />
      <Team />
      <CoreFeatures />
      <Testimonial />
    </div>
  );
};

export default Home;
