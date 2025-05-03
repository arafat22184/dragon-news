import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("you logged out successfully");
      })
      .catch(() => {
        alert("cannot logout something went wrong");
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="flex gap-5 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex gap-5">
        <img
          className="rounded-full w-10 h-10"
          src={user ? user.photoURL : userIcon}
          alt="user-icon"
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            Logout
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
