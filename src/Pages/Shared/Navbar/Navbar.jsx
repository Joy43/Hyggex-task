import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logohyggex.png";
import { useContext } from "react";
import { AuthContext } from "../../../Authentication/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const Navlinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/flash">Flashcard</Link>
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
        {/* -----------------login-------------- */}
        <div className="navbar-end">
          <div className="navbar-center text-3xl hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{Navlinks}</ul>
          </div>
          {user ? (
            <>
              <div className="dropdown">
                <div tabIndex={0} role="button" className=" m-1">
                  <img
                    className="w-14 rounded-full"
                    src={user?.photoURL}
                    alt="image"
                  />
                </div>
                <div
                  tabIndex={0}
                  className="dropdown-content z-[1] card card-compact -ml-48 w-64 p-3 shadow bg-slate-950 text-primary-content"
                >
                  <div className="card-body  text-black bg-[#ffe] ">
                    <h3 className="text-lg">
                      <span>Name:- {user?.displayName}</span>{" "}
                    </h3>
                    <p>Gmail:- {user?.email}</p>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-secondary"
                    >
                      LogOut
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mr-6">
                <Link to="signup">
                  <button className="w-32 bg-gradient-to-b from-blue-900 to-blue-500  rounded-3xl h-12 text-white">
                    Login
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
