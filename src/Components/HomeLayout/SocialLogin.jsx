import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleLogIn } = use(AuthContext);
  const handleGoogleLogin = () => {
    googleLogIn()
      .then(() => {
        alert("Sign in successfully with Google");
      })
      .catch(() => alert("an error occured"));
  };
  return (
    <div>
      <h2 className="font-black mb-5">Login With</h2>
      <div className="space-y-3">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-secondary w-full"
        >
          <FcGoogle size={24} />
          Login with Google
        </button>
        <button className="btn btn-outline btn-primary w-full">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
