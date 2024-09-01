import { BsCalendar2DateFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAddLocationAlt } from "react-icons/md";

const Location = () => {
  return (
    <div className="bg-black overflow-hidden my-10">
      <div className=" mx-10 my-10 text-white flex justify-between items-center gap-5">
        <div className="flex justify-center items-center gap-5">
          <BsCalendar2DateFill className="w-10 h-10" />
          <div>
            <p>we are open monday-friday</p>
            <h3>7:00 am - 9:00 pm</h3>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <FaPhoneAlt className="w-10 h-10" />
          <div>
            <p>Have a question ?</p>
            <h3>+2546 251 2658</h3>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <MdAddLocationAlt className="w-10 h-10" />
          <div>
            <p>Need a repair? our address</p>
            <h3>Liza Street, New York</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
