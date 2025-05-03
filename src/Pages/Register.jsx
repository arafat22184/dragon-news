import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [nameError, setNameError] = useState("");
  const { setUser, createUser, updateUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (name.length < 5) {
      setNameError("name should be more than 5 character");
    } else {
      setNameError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl });
          })
          .catch(() => setUser(user));
      })
      .catch(() => alert("something went wrong"));
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center ">
          Register your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />

            {/* Photo Url */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              className="input"
              placeholder="Photo URL"
              required
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              autoComplete="yes"
              required
            />

            {nameError && <p className="text-red-400 text-sm">{nameError}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Resgister
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to={"/auth/login"}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
