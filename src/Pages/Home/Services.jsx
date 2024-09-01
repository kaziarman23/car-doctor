import { useEffect } from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h4 className="text-[#FF3811] text-center font-bold">Service</h4>
      <h1 className="font-bold text-4xl text-center my-3">Our Service Area</h1>
      <p className="text-sm text-center">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don&#39;t look even slightly
        believable.{" "}
      </p>
      {/* service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {service.map((service) => (
          <div key={service._id}>
            <div className="card  shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={service.img}
                  alt={service.title}
                  className="rounded-xl "
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <div className="card-actions text-[#FF3811] justify-end">
                  <p>Price: ${service.price}</p>
                  <button>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-10">

      <button className="btn border-[#FF3811] text-[#FF3811] font-bold  bg-transparent">More Services</button>
      </div>
    </div>
  );
};

export default Services;
