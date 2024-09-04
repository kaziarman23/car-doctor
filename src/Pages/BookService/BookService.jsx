import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const BookService = () => {
  const loadedData = useLoaderData();
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState(loadedData.price);
  const [email, setEmail] = useState(user.email);
  const [message, setMessage] = useState("");

  const handleBookService = (e) => {
    e.preventDefault();

    const booking = {
      name,
      date,
      price,
      email,
      message,
      service_id: loadedData.service_id,
      service_title: loadedData.title,
      service_img: loadedData.img,
    };

    // sending booking info to  backend
    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          
          // showing alert
          Swal.fire({
            title: "Success",
            text: "Order Successfull",
            icon: "success",
            confirmButtonText: "Cool",
          });

          // clearing all inputs & navigating to home
          setName("");
          setDate("");
          setPrice("");
          setEmail("");
          setMessage("");

          navigate("/");
        }
      });
  };

  const handleCancel = () => {
    setName("");
    setDate("");
    setPrice("");
    setEmail("");
    setMessage("");

    navigate("/");
  };

  return (
    <div>
      <div></div>
      <div>
        <div className="hero bg-base-200">
          <div className="hero-content w-full">
            <div className="card bg-base-100 w-4/5 shrink-0 shadow-2xl">
              <h1 className="text-center text-3xl p-3 text-white">
                Book Service: {loadedData.title}
              </h1>
              <form onSubmit={handleBookService} className="card-body">
                <div className="w-full flex justify-between items-center gap-5">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="You'r Name"
                      defaultValue={user?.displayName}
                      onChange={(e) => setName(e.target.value)}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Date</span>
                    </label>
                    <input
                      type="date"
                      className="input input-bordered"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="w-full my-5 flex justify-between items-center gap-5">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Due Amount</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Due Amount"
                      defaultValue={loadedData.price + " $"}
                      readOnly
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">You&#39;r Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="You'r Email"
                      defaultValue={user?.email}
                      readOnly
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="form-control w-full">
                  <textarea
                    type="text"
                    maxLength={150}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="You&#39;r Message"
                    className="input input-bordered h-40"
                  />
                </div>
                <div className="form-control mt-6 gap-5">
                  <button type="submit" className="btn btn-primary">
                    Order Confirm
                  </button>
                  <button
                    onClick={handleCancel}
                    className="btn bg-red-500 text-black"
                  >
                    Order Cencel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookService;
