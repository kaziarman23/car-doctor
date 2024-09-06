import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((res) => setBookings(res.data));

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your service has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handleBookingConfirmed = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Order Confirmed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // updating function
          const remainingService = bookings.filter(
            (booking) => booking._id !== id
          );
          const updatedService = bookings.find((booking) => booking._id === id);
          updatedService.status = "Order Confirmed";
          const newBookings = [updatedService, ...remainingService];
          setBookings(newBookings);

          // showing alert
          Swal.fire({
            title: "Updated",
            text: "Your service has been updated.",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <div></div>
      <div>
        <h1 className="text-3xl text-center font-bold">
          My All Bookings: {bookings.length}
        </h1>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Email</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={booking.service_img}
                            alt="Avatar Tailwind CSS Component"
                          />
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
                    {booking.status === "Order Confirmed" ? (
                      <button className="btn p-2 bg-green-500 hover:text-white text-black">
                        Order Confirmed
                      </button>
                    ) : (
                      <button
                        onClick={() => handleBookingConfirmed(booking._id)}
                        className="btn p-2 bg-orange-500 hover:text-white text-black"
                      >
                        Please Confirm
                      </button>
                    )}
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="btn p-2 bg-red-500 text-black hover:text-white"
                    >
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
