import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-4xl text-red-500">Not Found Page</h1>
      <Link to="/">
        <h4 className="font-bold hover:text-blue-500">Please Go Back to Home Page</h4>
      </Link>
    </div>
  );
};

export default NotFound;
