import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import facebook from "../../assets/images/login/facebook.png";
import linkedin from "../../assets/images/login/linkedin.png";
import google from "../../assets/images/login/search.png";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const newUser = { email, password };
    console.log(newUser);
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
