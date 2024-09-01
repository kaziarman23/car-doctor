import img1 from "../../assets/icons/group.svg";
import img2 from "../../assets/icons/deliveryt.svg";
import img3 from "../../assets/icons/person.svg";
import img4 from "../../assets/icons/Wrench.svg";
import img5 from "../../assets/icons/check.svg";
import img6 from "../../assets/icons/deliveryt.svg";
const CoreFeatures = () => {
  const features = [
    {
      id: 1,
      img: img1,
      title: "Expert Team",
    },
    {
      id: 2,
      img: img2,
      title: "Timely Delivery",
    },
    {
      id: 3,
      img: img3,
      title: "24/7 Support",
    },
    {
      id: 4,
      img: img4,
      title: "Best Equipment",
    },
    {
      id: 5,
      img: img5,
      title: "Best Equipment",
    },
    {
      id: 6,
      img: img6,
      title: "Timely Delivery",
    },
  ];
  return (
    <div>
      <h4 className="text-[#FF3811] text-center font-bold">Core Features</h4>
      <h1 className="font-bold text-4xl text-center my-3">Why Choose Us</h1>
      <p className="text-sm text-center">
        the majority have suffered alteration in some form, by injected humour,
        or randomised
        <br />
        words which don`&#39;t look even slightly believable.
      </p>

      {/* cards */}
      <div className="flex justify-center items-center gap-2 my-10">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="card hover:bg-[#FF3811] hover:text-white w-96 shadow-xl"
          >
            <figure>
              <img src={feature.img} alt={feature.title} className="mt-5" />
            </figure>
            <div className="card-body">
              <p className="">{feature.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatures;
