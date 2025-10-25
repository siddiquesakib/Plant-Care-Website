import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthProvider";
import Loading from "./Loading";

const LogIn = () => {
  const { signIn, googleLogin } = use(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

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

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((res) => {
        toast.success(`Welcome ${res.user.displayName || "back"}!`);
        navigate(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
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

  return (
    <div className="min-h-screen bg-[#f7f6f1]">
      <title>Plant-Care | Login</title>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Login Now!
            </h2>
            <p className="text-gray-600">Welcome back to Plant Care</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#2a7d2e]">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[13px] top-[45px] cursor-pointer z-50"
                >
                  {show ? <VscEye size={20} /> : <VscEyeClosed size={20} />}
                </span>
              </div>

              <div className="text-right">
                <Link
                  to={"https://gmail.com/"}
                  target="_blank"
                  className="text-sm text-[#2a7d2e] hover:text-[#194B1B] font-medium"
                >
                  Forget Password?
                </Link>
              </div>
              <button
                type="button"
                onClick={handleGoogle}
                className="btn bg-white w-full text-black border-[#e5e5e5] hover:bg-[#C5C7BC] "
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
                Login
              </button>

              <div className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to={"/auth/register"}
                  state={from}
                  className="text-[#2a7d2e] hover:text-[#194B1B]  font-medium"
                >
                  Register here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
