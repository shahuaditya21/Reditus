import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Register() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white">

          <h1 className="text-3xl font-bold text-center mb-6">
            Create Account
          </h1>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border p-3 rounded-lg"
            />

            <button
              className="w-full bg-emerald-600 text-white py-3 rounded-lg"
            >
              Sign Up
            </button>

          </form>

        </div>
      </div>
    </>
  );
}

export default Register;

<p className="text-center mt-4 text-sm">
  Already have an account?{" "}
  <Link to="/login" className="text-emerald-600 font-medium">
    Login
  </Link>
</p>