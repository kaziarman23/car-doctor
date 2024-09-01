import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import team1 from "../../assets/images/team/1.jpg";
import team2 from "../../assets/images/team/2.jpg";
import team3 from "../../assets/images/team/3.jpg";
import { FaFacebook } from "react-icons/fa6";

const cards = [
  {
    id: 1,
    img: team1,
    title: "Car Engine Plug",
    expartAt: "Engine Expert",
  },
  {
    id: 2,
    img: team2,
    title: "Car Engine Plug",
    expartAt: "Engine Expert",
  },
  {
    id: 3,
    img: team3,
    title: "Car Engine Plug",
    expartAt: "Engine Expert",
  },
];

const Team = () => {
  return (
    <div>
      <h4 className="text-[#FF3811] text-center font-bold">Team</h4>
      <h1 className="font-bold text-4xl text-center my-3">Meet Our Team</h1>
      <p className="text-sm text-center">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don&#39;t look even slightly believable.
      </p>

      {/* carousel part */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {cards.map((card) => (
          <div key={card.id} className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={card.img} alt={card.title} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{card.title}</h2>
              <p>{card.expartAt}</p>
              <div className="card-actions justify-center items-center gap-3">
                <FaFacebook className="w-8 h-8" />
                <FaTwitter className="w-8 h-8" />
                <FaLinkedin className="w-8 h-8" />
                <FaInstagram className="w-8 h-8" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
