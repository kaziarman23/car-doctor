import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import facebook from "../../assets/images/login/facebook.png";
import linkedin from "../../assets/images/login/linkedin.png";
import google from "../../assets/images/login/search.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser, loading } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    console.log(email, password);

    if (loading) {
      return <span className="loading loading-infinity loading-lg"></span>; 
    }
    // creating a new user
    createUser(email, password)
      .then((result) => {

        const user = result.user
        user.displayName = name
        console.log(user);
        Swal.fire({
          title: "Success",
          text: "Signup Successfull",
          icon: "success",
          confirmButtonText: "Cool",
        });

        console.log("sign up success");

        setName("");
        setEmail("");
        setPassword("");
        navigate("/");
      })
      .catch((error) => {
        console.log("creating user error: ", error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col gap-5 lg:flex-row">
        <div>
          <img
            src={loginImg}
            alt="login image"
            className="w-4/5 h-full object-cover"
          />
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignup} className="card-body">
            <h1 className="text-3xl font-bold text-center">Signup</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Signup</button>
            </div>
            <div className="mt-10 mb-5">
              <p className="text-center">or Signup with</p>
              <div className="my-5 flex justify-center items-center gap-4">
                <button>
                  <img src={facebook} alt="facebook" className="w-6 h-6" />
                </button>
                <button>
                  <img src={linkedin} alt="linkedin" className="w-6 h-6" />
                </button>
                <button>
                  <img src={google} alt="google" className="w-6 h-6" />
                </button>
              </div>
            </div>
            <p className="text-center">
              Already Have An Account? Please{" "}
              <Link to="/login">
                <span className="text-blue-500">Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
