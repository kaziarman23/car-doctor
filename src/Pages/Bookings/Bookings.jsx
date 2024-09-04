import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  });
  return (
    <div>
      <div></div>
      <div>
        <h1 className="text-3xl text-center font-bold">
          My All Bookings: {bookings.length}
        </h1>

        {/* table div */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Email</th>
                <th>Price</th>
                <th>Date</th>
                <th>Process</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* table row  */}
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          {booking.img && (
                            <img
                              src={booking.img}
                              alt="Avatar Tailwind CSS Component"
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{booking.service_title}</div>
                      </div>
                    </div>
                  </td>
                  <td>{booking.email}</td>
                  <td>${booking.price}</td>
                  <th>{booking.date}</th>
                  <th>
                    <button className="btn p-2 bg-orange-500 text-black pointer-events-none">
                      Panding
                    </button>
                  </th>
                  <th>
                    <button className="btn p-2 bg-red-500 text-black hover:text-white">
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
