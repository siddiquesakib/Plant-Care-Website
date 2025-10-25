import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { AuthContext } from "../Context/AuthProvider";
import Loading from "./Loading";

const Register = () => {
  const { createUser, updateUser, googleLogin } = use(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    // console.log(email, password, name);

    const passCheck = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passCheck.test(password)) {
      toast.error(
        "Password must have 1 uppercase, 1 lowercase, and be at least 6 chars long."
      );
      return;
    }

    createUser(email, password)
      .then(() => {
        return updateUser({ displayName: name, photoURL: photo });
      })
      .then(() => {
        toast.success("Registration successful!");
        navigate(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        console.log(error);
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("registered");
        navigate(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-[#f7f6f1]">
      <title>Plant-Care | Register</title>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Register Now!
            </h2>
            <p className="text-gray-600">
              Join GreenNest and start your plant journey
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#2a7d2e]">
            <form onSubmit={handleRegister} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Photo URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo URL
                </label>
                <input
                  type="url"
                  required
                  name="photo"
                  placeholder="Enter your photo URL"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  required
                  name="password"
                  placeholder="Create a strong password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[12px] top-[45px] cursor-pointer z-50"
                >
                  {show ? <VscEye size={20} /> : <VscEyeClosed size={20} />}
                </span>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-600">
                  I agree to the{" "}
                  <Link className="text-green-600 hover:text-green-700 font-medium">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link className="text-green-600 hover:text-green-700 font-medium">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Google */}
              <button
                onClick={handleGoogle}
                className="btn bg-white w-full text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>

              <button
                type="submit"
                className="w-full cursor-pointer bg-[#2a7d2e] text-white px-4 py-2 rounded-lg hover:bg-[#222e1f] transition-colors duration-900 text-center"
              >
                Register
              </button>

              <div className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to={"/auth/login"}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Login here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
