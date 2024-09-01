import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={person}
            alt="about_us person photo"
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            alt="about_us parts photo"
            className="w-2/4 absolute right-5 top-1/2 border-8 rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2 space-y-4">
          <h3 className="font-bold text-[#FF3811]">About us</h3>
          <h1 className="w-1/2 text-4xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&#39;t look even slightly
            believable.
          </p>
          <p className="">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&#39;t look even slightly
            believable.
          </p>
          <button className="btn text-white bg-[#FF3811]">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
