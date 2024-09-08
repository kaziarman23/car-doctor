import axios from "axios";
import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("interceptors error:", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          //logout the user
          logoutUser()
            .then(() => {
              Swal.fire({
                title: "Logout",
                text: "user had been Logout",
                icon: "error!",
                confirmButtonText: "Okey",
              });

              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
