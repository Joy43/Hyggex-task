import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logohyggex.png";
const Navbar = () => {
  const Navlinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="">Flashcard</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/faq">FAQ</Link>
      </li>
      <li></li>
    </>
  );
  return (
    <div>
      <div className="navbar text-2xl p-4 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Navlinks}
            </ul>
          </div>
          <img className="w-44 h-10" src={logo} alt="" />
        </div>

        <div className="navbar-end">
          <div className="navbar-center text-3xl hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{Navlinks}</ul>
          </div>

          <div className="mr-6">
            <Link to="signup">
              <button className="w-32 bg-gradient-to-b from-blue-900 to-blue-500  rounded-3xl h-12 text-white">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
