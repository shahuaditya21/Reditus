import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/landing/Navbar";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login successful!");

      setEmail("");
      setPassword("");

      navigate("/dashboard");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white">

          <h1 className="text-3xl font-bold text-center mb-6">
            Welcome Back
          </h1>

          <form
            className="space-y-4"
            onSubmit={handleLogin}
          >

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-lg"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-4 text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-emerald-600 font-medium"
            >
              Sign Up
            </Link>
          </p>

        </div>
      </div>
    </>
  );
}

export default Login;