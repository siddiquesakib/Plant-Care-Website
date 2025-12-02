import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { AuthContext } from "../Context/AuthProvider";
import Loading from "./Loading";

const Register = () => {
  const { createUser, updateUser, googleLogin } = use(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

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
        toast.success(`Welcome ${name}!`);
        navigate(from);
      })
      .catch((err) => {
        const errorMessage = err.message;
        toast.error(errorMessage);
        console.log(err);
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
        toast.success(`Welcome ${res.user.displayName}!`);
        navigate(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
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
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-50/50">
      <title>Plant-Care | Register</title>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-3">
              Register Now!
            </h2>
            <p className="text-gray-600 text-lg">
              Join Plant Care and start your plant journey
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 border-t-4 border-green-500 hover:shadow-green-100 transition-shadow duration-500">
            <form onSubmit={handleRegister} className="space-y-6">
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
                  className="absolute right-3 top-[45px] cursor-pointer z-50"
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
                  <Link className="text-green-600 hover:text-green-700 font-semibold hover:underline">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link className="text-green-600 hover:text-green-700 font-semibold hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              <button
                type="button"
                onClick={handleGoogle}
                className="btn bg-white w-full text-gray-700 font-semibold border-2 border-gray-200 hover:bg-gray-50 hover:border-green-300 transition-all shadow-md hover:shadow-lg"
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
                className="w-full cursor-pointer bg-linear-to-r from-green-600 to-emerald-500 text-white px-5 py-3 rounded-xl hover:from-green-700 hover:to-emerald-600 transition-all duration-300 text-center font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Register
              </button>

              <div className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to={"/auth/login"}
                  state={from}
                  className="text-green-600 hover:text-green-700 font-bold hover:underline"
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
